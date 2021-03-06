module.exports = config => (req, res, next) => {
  res.locals.BASE_URL = config.baseURL;
  res.locals.ENVIRONMENT = config.env;

  next();
};
