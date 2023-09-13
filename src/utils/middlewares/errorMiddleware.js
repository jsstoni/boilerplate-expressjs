import config from "../../../config/index.js";

const withErrorStack = (error, stack) => {
  if (config.dev) {
    return { ...error, stack };
  }
  return error;
};

const logErrors = (err, req, res, next) => {
  console.error(err);
  next(err);
};

const wrapErrors = (err, req, res, next) => {
  const outError = {
    stack: err.stack,
    output: {
      statusCode: err.status,
      payload: {
        error: err.message || "Internal server error",
      },
    },
  };
  next(outError);
};

const errorHandle = (err, req, res, next) => {
  const { stack, output } = err;
  res.status(output.statusCode).json(withErrorStack(output.payload, stack));
};

export { logErrors, wrapErrors, errorHandle };
