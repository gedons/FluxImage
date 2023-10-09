const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const cookieParser = require("cookie-parser");

const jwksHost = process.env.HANKO_API_URL;

const hankoAuthMiddleware = () => {
  const authMiddleware = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 2,
      jwksUri: `${jwksHost}/.well-known/jwks.json`,
    }),
    algorithms: ["RS256"],
    getToken: function fromCookieOrHeader(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.cookies && req.cookies.hanko) {
        return req.cookies.hanko;
      }
      return null;
    },
  });

  return authMiddleware;
};

module.exports = hankoAuthMiddleware;
