const checkRole = (role, action) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Role that is added to req.user via JWT
        const permissions = roles[userRole].can;

        if (permissions.includes(action)) {
            next(); // User has permission, proceed
        } else {
            res.status(403).jsonm({ message: "Access denied "})
        }
    }
}

module.exports = checkRole;