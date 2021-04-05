const authRouter = require('../routes/auth');
const AppError = require('../utils/appError');
const globalErrorHandler = require('../controllers/error');

module.exports = (app) => {
  app.use('/api/auth', authRouter);

  app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
  });

  app.use(globalErrorHandler);
};
