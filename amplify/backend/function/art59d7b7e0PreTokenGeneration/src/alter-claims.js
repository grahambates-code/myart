var {helpers} = require('./helper')

exports.handler = async (event, context, callback) => {

  let claims = { "x-hasura-user-id": event.request.userAttributes.sub };

  await helpers.hasuraUpdate(event.request.userAttributes.sub);

  const tmpRoles = []

  tmpRoles.push("account-user");

  claims["x-hasura-allowed-roles"]  = tmpRoles;
  claims["x-hasura-default-role"]   = "account-user";

  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        "https://hasura.io/jwt/claims": JSON.stringify(claims),
      },
    },
  };

  return event;
};

