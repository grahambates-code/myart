const https = require('https')

const hasuraAdminSecret = "thisisadminkeyfortest";
const url = "gql.myart.ink";

const upsertUserQuery = `
     mutation($userId: uuid!){
      insert_user_table(objects: [{ id: $userId }], on_conflict: { constraint: user_table_pkey, update_columns : []}) {
        affected_rows
      }
    }
  `

const helpers = {

    hasuraUpdate : (sub, account_id, role, deploymentId, forms) => {

        return new Promise(function(resolve, reject) {

            const graphqlReq = { "query": upsertUserQuery, "variables": {  userId : sub } }

            const data =  JSON.stringify(graphqlReq)

            const options = {
                hostname: url,
                port: 443,
                path: '/v1/graphql',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-hasura-admin-secret': hasuraAdminSecret,
                    'Content-Length': data.length
                }
            }

            var req = https.request(options, function(res) {
                // reject on bad status
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    return reject(new Error('statusCode=' + res.statusCode));
                }
                // cumulate data
                var body = [];
                res.on('data', function(chunk) {
                    body.push(chunk);
                });
                // resolve on end
                res.on('end', function() {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString());
                    } catch(e) {
                        reject(e);
                    }

                    console.log(body);
                    resolve(body);
                });
            });

            // reject on request error
            req.on('error', function(err) {
                reject(err);
            });

            req.write(data);

            // IMPORTANT
            req.end();
    });
}

}

exports.helpers = helpers;
