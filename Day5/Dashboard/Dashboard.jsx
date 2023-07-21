import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import '../jamal.scss'

import { FaAddressCard,FaWpforms , FaPeopleArrows} from "react-icons/fa";
function Dashboard() {
  return (
    
    <section class="home">
      <Sidebar />

  <section class="card__container">

    <div class="card__bx card__1">
      <div class="card__data">
        <div class="card__icon">
          <div class="card__icon-bx">
            <i class="pen-ruler"><FaAddressCard/></i>
          </div>
        </div>
        <div class="card__content">
          <h3>Existing Policies</h3>
          <p>Your Active Policies</p>
          <a href="/expolicy">More Info</a>
        </div>
      </div>
    </div>

  
    <div class="card__bx card__2">
      <div class="card__data">
        <div class="card__icon">
          <div class="card__icon-bx"><i class="code">< FaWpforms/></i></div>
        </div>
        <div class="card__content">
          <h3>New<br></br>Policies</h3>
          <p>New Policies are Always Available</p>
          <a href="/newpolicy">More Info</a>
        </div>
      </div>
    </div>
    <div class="card__bx card__3">
      <div class="card__data">
        <div class="card__icon">
          <div class="card__icon-bx"><i class="rocket">< FaPeopleArrows /></i></div>
        </div>
        <div class="card__content">
          <h3>Policy<br></br>Renuval</h3>
          <p>You Can Renew Your Policies Here</p>
          <a href="/renewpolicy">More Info</a>
        </div>
      </div>
    </div>

  </section>

</section>
  )
}

export default Dashboard