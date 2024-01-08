const checkAdmin = (req, res, next) => {
    const user = req.user;

    if (user && user.role === 'Admin') {
        next();
    } else {
        res.status(403).send('Forbidden: You do not have admin access.');
    }
};

module.exports = checkAdmin;