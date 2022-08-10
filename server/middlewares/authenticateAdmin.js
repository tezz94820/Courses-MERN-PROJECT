
const authenticateAdmin = (req,res,next) => {
    if(req.user.userRole==='admin'){
        return next()
    }
    else{
        throw new Error('you must be a admin')
    }
}

module.exports = authenticateAdmin