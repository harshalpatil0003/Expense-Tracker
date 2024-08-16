import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <div>
            <h1 style={{textAlign:'center',margin:'20px'}}>User Registration</h1>
            <form className=' input-form  d-block mx-auto p-4 rounded-3 my-5'>
            <div className="mb-3">
                    <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required  placeholder='Name'/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required  placeholder='Email'/>
                </div>
                <div class="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" required placeholder='password'/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input " id="exampleCheck1" required />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success border border-0 entry-btn d-block mx-auto form-control">Rgister Now</button>
                <p className='text-center my-3'>Already have an account <Link to='/login'>Login</Link> 
                </p>
            </form>
        </div>
    )
}

export default Signup
