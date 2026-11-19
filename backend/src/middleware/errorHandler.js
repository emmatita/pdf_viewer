
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        error: statusCode >= 500
            ? "Unable to generate the summary. Please try again."
            : err.message
    });
};