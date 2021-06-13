exports.serverError = (err, req, res, next) => {
    if (err) {
        return res.render('error/500', {
            pageTitle: 'Error'
        })
    }
    next();
}
exports.pageNotFoundError = (req, res, next) => {
    res.render('error/400', {
        pageTitle: 'Page not found.'
    })
}