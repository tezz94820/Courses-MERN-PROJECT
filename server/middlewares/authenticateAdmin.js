
const authenticateAdmin = (req,res,next) => {
    if(req.user.userRole==='admin'){
        return next()
    }
    else{
        throw new Error('you must be admin')
    }
}

module.exports = authenticateAdmin