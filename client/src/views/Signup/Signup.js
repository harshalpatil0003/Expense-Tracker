import React from 'react'
import axios from 'axios'
import {Toaster,toast} from 'react-hot-toast'
import { useState } from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

function Signup() {
    const [user ,setUser]=useState({
        name:'',
        email:'',
        password:''
    })
    const signup= async()=>{
        const response=await axios.post(`${process.env.REAT_APP_API_URL}/v1/signups`,{
            name:user.name,
            email:user.email,
            password:user.password

        })
        if(response.data.success){
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)

        }
    }
    return (
        <div>
            <h1 style={{textAlign:'center',margin:'20px'}}>User Registration</h1>
            <form className=' input-form  d-block mx-auto p-4 rounded-3 my-5'>
            <div className="mb-3">
                    <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"   placeholder='Name' value={user.name} 
                    onChange={(e)=>setUser({...user,name:e.target.value})} />

                </div>
                <div className="mb-3">
                    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"   placeholder='Email' value={user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})} />
                    
                </div>
                <div class="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" required placeholder='password' value={user.password}
                       onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input " id="exampleCheck1"  />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success border border-0 entry-btn d-block mx-auto form-control" onClick={signup}>Rgister Now</button>
                <p className='text-center my-3'>Already have an account <Link to='/login'>Login</Link> 
                </p>
            </form>
            <Toaster/>
        </div>
    )
}

export default Signup
