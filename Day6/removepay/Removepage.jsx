import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../Expolicy/Expolicy.css'
function Removepage () {
  return (
    
    <section className='home'style={{}}>
        <Sidebar />
        <h1 style={{paddingLeft:'55px',paddingTop:'50px'}}>Your Payment Details </h1>
        <div style={{padding:'50px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button type="button" class="btn btn-danger">Remove</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button type="button" class="btn btn-danger">Remove</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button type="button" class="btn btn-danger">Remove</button></td>
    </tr>
  </tbody>
</table>
</div>

    </section>
  )
}

export default Removepage