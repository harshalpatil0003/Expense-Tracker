import React from 'react'
import { Link } from 'react-router-dom'
import '../Signup/Signup.css'

function Login() {
  const login=async()=>{
    const response=await axios.post(`${process.env.REAT_APP_API_URL}/v1/signins`)

  }
  return (
    <div>
      <h1 className='text-center m-4'>User Login</h1>
      <form className=' input-form  d-block mx-auto p-4 rounded-3 my-5'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Email'/>
                </div>
                <div class="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1"  placeholder='Password'/>
                </div>

                <button type="submit" className="btn btn-success border border-0 entry-btn d-block mx-auto form-control"> < Link to="/">Signin</Link></button>
                <p className='text-center my-3'>Don't have an account <Link to='/signup'>SignUp</Link> 
                </p>
            </form>
    </div>
  )
}

export default Login
