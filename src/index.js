module.exports = function(domain) {
    return function(req, res, next) {
        const d = req.get('host') || req.get('origin') || req.hostname || 'Unknown';
        if(d !== domain) return next('route');
        next()
    }
}