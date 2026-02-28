role: { type: String, default: "user" }

module.exports = function(req, res, next){
    if(req.user.role !== "admin")
        return res.status(403).json("Admin Only");
    next();
}