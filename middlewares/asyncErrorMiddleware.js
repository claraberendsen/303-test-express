const boom = require('boom');

const asyncErrorMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    if (!err.isBoom) {
      return next(boom.badImplementation(err));
    }
    return next(err);
  });
};

module.exports = asyncErrorMiddleware;
