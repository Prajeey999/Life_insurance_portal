import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
// import '../Upi/Upi.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Netb() {
    const notify = () => toast.success("Net Banking Account Added Successfully!");
  return (
    <section className='home'>
        <ToastContainer />
        <Sidebar />
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:'200px' }} >
        
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'800px',padding:'100px'}}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Net Banking ID</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />

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

export default Netb