exports.handleError = (statusCode, res, message) => {
    res.status(statusCode);
    res.send({ message })
}


