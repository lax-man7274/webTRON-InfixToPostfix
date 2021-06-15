exports.serverError = (err, req, res, next) => {
    if (err) {
        return res.render('error/500', {
            pageTitle: 'Error',
            flashMessages:[]
        })
    }
    next();
}
exports.pageNotFoundError = (req, res, next) => {
    res.render('error/404', {
        pageTitle: 'Page not found.',
        flashMessages:[]
    })
}