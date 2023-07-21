import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
// import '../Upi/Upi.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Upi() {
    const notify = () => toast.success("UPI account Added Successfully!");
  return (
    <section className='home'>
        <ToastContainer />
        <Sidebar />
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:'200px' }} >
        
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'800px',padding:'100px'}}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">UPI ID</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          Enter the Upi Id along with phone number
        </small>
        <br></br>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
     <br></br>
      <a type='button' className="btn btn-primary" label='' onClick={notify}>
        Submit
      </a>
       
    </form>
    </div>
    </section>
  )
}

export default Upi