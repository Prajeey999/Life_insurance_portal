import React from 'react';
import '../paymentselect/ps.scss'
import Sidebar from '../Sidebar/Sidebar';

function Ps() {
  return (
    <section className='home'>
        <Sidebar />
    <div className=''>
      <div className="l-container">
    
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay1'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <a type="button" class="btn btn-success" style={{zIndex:'1000'}} href='/pay' >Add Credit Card</a>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay2'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <a type="button" class="btn btn-success" style={{zIndex:'1000'}} href='/pay' >Add Debit Card</a>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay3'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <a type="button" class="btn btn-success" style={{zIndex:'1000'}}href='/upi'>Add UPI Account</a>
        </div>
      </div>
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='pay4'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <a type="button" class="btn btn-success" style={{zIndex:'1000'}} href='/netbanking'>Add NetBanking</a>
        </div>
      </div>
    </div>
    </div>

    <div className=''>
      <div className="l-container">
    
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{}} id='payadded'>
        <center><h5 style={{padding:'10px'}}></h5></center>
        <a type="button" class="btn btn-warning" style={{zIndex:'1000'}} href='/remove' >Remove Payment</a>
        </div>
      </div>
    
   
     
    </div>
    </div>
    </section>
  );
}

export default Ps;
