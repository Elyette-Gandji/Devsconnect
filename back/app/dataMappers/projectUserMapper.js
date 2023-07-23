const client = require('./database');
const ApiError = require('../errors/apiError.js');

//Si user_id de la table project est le même que user_id dans la table project_has_user, alors is_active = true
const createProjectHasUser = async (projectId, userId) => {
  const preparedQuery = {
    text: 'INSERT INTO "project_has_user" ("project_id", "user_id", "is_active") VALUES ($1, $2, CASE WHEN "user_id" = $2 THEN true ELSE false END) RETURNING *',
    values: [projectId, userId, true],
  };
  const results = await client.query(preparedQuery);
  if (!results.rows[0]) {
    throw new ApiError('Relation not found', { statusCode: 204 });
  }
  return results.rows[0];
};

const updateProjectHasUser = async(projectId, userId) => {
  const result = await client.query(`UPDATE "project_has_user" 
    SET "is_active" = NOT"is_active"
    WHERE "project_has_user"."project_id" = ${projectId} 
    AND "project_has_user"."user_id" = ${userId} 
    RETURNING *`
  );
  if (!result.rows[0]) {
    throw new ApiError('Relation not found', { statusCode: 204 });
  }
  return result.rows[0]; 
}

const deleteProjectHasUser = async(projectId, userId) => {
  const preparedQuery = {
    text: `DELETE FROM "project_has_user" WHERE "project_id" = $1 AND "user_id" = $2 RETURNING *`,
    values: [projectId, userId],
  };
  const result = await client.query(preparedQuery);
  if (!result.rows[0]) {
    throw new ApiError('Relation not found', { statusCode: 204 });
  }
  return result.rows[0];
}

module.exports = { 
  createProjectHasUser, 
  updateProjectHasUser, 
  deleteProjectHasUser 
};
