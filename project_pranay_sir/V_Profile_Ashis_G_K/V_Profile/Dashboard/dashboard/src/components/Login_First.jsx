import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login_First = () => {
    const navigate = useNavigate()
  return (
    <div style={{height:"100vh" , background:"black"}} className=' d-flex justify-content-center gap-3 align-items-center flex-column'>
        <div className=' d-flex  p-5 border  justify-content-center gap-3 align-items-center flex-column'>
        <h1 className=" text-warning">Login First</h1>
        <button onClick={()=>navigate("/login")} className=' btn btn-outline-warning'>Login</button>

        </div>
        
        </div>
  )
}

export default Login_First