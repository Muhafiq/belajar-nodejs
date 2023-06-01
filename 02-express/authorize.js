const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === 'afiq') {
        req.user = {name: 'afiq', id:5};
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize;