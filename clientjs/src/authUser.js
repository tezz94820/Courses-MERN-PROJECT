const authUser = () => {
    if(localStorage.getItem('token') && localStorage.getItem('role')==='user'){
      return true
    }
    else{
      return false
    }
}

const authAdmin = () => {
    if(localStorage.getItem('token') && localStorage.getItem('role')==='admin'){
      return true
    }
    else{
      return false
    }
}

export  {authUser , authAdmin}