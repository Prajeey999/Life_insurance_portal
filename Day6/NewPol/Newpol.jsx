import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../NewPol/Newpol.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Newpol() {
  const notify = () => toast.success("Policy Added Your Account Successfully");
  return (
    <section>
       <ToastContainer />
    <Sidebar />
<section id="advertisers" class="home pt-5 pb-5"style={{overflowX:'hidden'}}>
  <div class="container" style={{display:'flex', flexDirection:'column'}}>
    <div class="row" id='newpcards'>
      <div class="section-header text-center">
        <h2 class="fw-bold fs-1">
          Our 
          <span class="b-class-secondary"> Policy </span>Services
        </h2>
      </div>
    </div>
    <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center" id='allcardsarehere'>
   

     
     
     
    <div class="col">
        <div class="service-card">
         
          <h3>Policy Name:-ENDOWMENT WITH PROFITS </h3>
          <h3>Policy No:-  <span class="b-class-secondary" style={{color:'green'}}> 14</span></h3>
        
          <p>
            Duration : 36 months
          </p><br></br>
          <p>
            Type : Endowment.
          </p>
          <button type="button" class="btn btn-success" onClick={notify} >Add This Policy</button>
        </div>
      </div><div class="col">
        <div class="service-card">
         
          <h3>Policy Name:- JEEVAN AMRIT</h3>
          <h3>Policy No:-  <span class="b-class-secondary" style={{color:'green'}}> 41</span></h3>
        
          <p>
            Duration : 24 months
          </p><br></br>
          <p>
            Type : Endowment.
          </p>
          <button type="button" class="btn btn-success"onClick={notify}>Add This Policy</button>
        </div>
      </div><div class="col">
        <div class="service-card">
         
          <h3>Policy Name:-JEEVAN ANKUR </h3>
          <h3>Policy No:-  <span class="b-class-secondary" style={{color:'green'}}> 48</span></h3>
        
          <p>
            Duration : 10 Years
          </p><br></br>
          <p>
            Type : Endowment.
          </p>
          <button type="button" class="btn btn-success"onClick={notify}>Add This Policy</button>
        </div>
      </div><div class="col">
        <div class="service-card">
         
          <h3>Policy Name:- NEW JANARAKSHA </h3>
          <h3>Policy No:-  <span class="b-class-secondary" style={{color:'green'}}> 69</span></h3>
        
          <p>
            Duration : 5 Years
          </p><br></br>
          <p>
            Type : Endowment.
          </p>
          <button type="button" class="btn btn-success"onClick={notify}>Add This Policy</button>
        </div>
      </div><div class="col">
        <div class="service-card">
         
          <h3>Policy Name:- JEEVAN PRAMUKH </h3>
          <h3>Policy No:-  <span class="b-class-secondary" style={{color:'green'}}> 14</span></h3>
        
          <p>
            Duration : 36 months
          </p><br></br>
          <p>
            Type : Endowment.
          </p>
          <button type="button" class="btn btn-success"onClick={notify}>Add This Policy</button>
        </div>
      </div><div class="col">
        <div class="service-card">
         
          <h3>Policy Name:- JEEVAN SREE </h3>
          <h3>Policy No:-  <span class="b-class-secondary" style={{color:'green'}}> 14</span></h3>
        
          <p>
            Duration : 36 months
          </p><br></br>
          <p>
            Type : Endowment.
          </p>
          <button type="button" class="btn btn-success"onClick={notify}>Add This Policy</button>
        </div>
      </div>
     
     
  
    </div>
  </div>
</section>
    </section>
  )
}

export default Newpol