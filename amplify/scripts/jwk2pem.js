var jwkToPem = require('jwk-to-pem'), jwt = require('jsonwebtoken');

var jwk = {
            "alg": "RS256",
            "e": "AQAB",
            "kid": "yQwI7gqsSb4FLImdEKhf26r9dIEdhRor39wgXr2yR30=",
            "kty": "RSA",
            "n": "tZC7NOVkMARUDZOFzNhOAmIEsEFn3suBs4rm3FTx7wYq0HuVpsLM5IVAJ3VnUN28lbQrOSjtu9wks_ZUTPXEFC13wcmrGpEpFjUdY3qmJDTkSXeGSrKI0qhhn4oQ93ftBe2T_6dYMTsqGNQs8JVIyiKxY6yZ87IQkqJKZzuU8S7upkBnvcM-NB_-Ye9U2jYmZ6XHrmDW7mVITUc6ONhf23MLGfaqo5CsKbFp4r0cbWRlkkP6Vx2PKclKgSKU_pwa4X2Ou6aMq4Lfg9udPMLCaAjxivUn-4IH4OAUU2IfYm1XYftux3JUEUTtp0E59DOe0kYsPZ8FmF1z45WtXip_MQ",
            "use": "sig"
    },
    pem = jwkToPem(jwk);

console.log(pem);
