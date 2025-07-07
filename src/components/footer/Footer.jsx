import React from 'react'
import footer1 from "../../assets/footer1.png"
import footer2 from "../../assets/footer2.png"
import footer3 from "../../assets/footer3.png"
import footer4 from "../../assets/footer4.png"
import footer5 from "../../assets/footer5.png"
import logo from "../../assets/Logo.png"
import side from "../../assets/side.png"
import facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"
import g from "../../assets/g.png"
import ins from "../../assets/in.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-title">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <ul>
              <li>Body</li>
              <li>Trevel</li>
              <li>Account</li>
            </ul>
          </div>

          <div className="footer-main">
            <div className="info">
              <p id='text1'>We are location independent bloggers, digital influencers, 
                small group tour organizers and world travelers with a 
                serious passion for the sun, the sea and adventure.</p>
                <p>Eight years and 60-something countries later and we are still on the road.</p>
            </div>

            <div className="footer-body">
              <p id='names'>Add: 221B John hope 
                Street, Lekki, Lagos,
                Nigeria.</p>

                <div className="footer-body-contact">
                <p id='number'>T: +234 706 507 8544</p>
                <p id='email'>E: info@redexplorers.com</p>
                <p id='site'>W: www. redexplorers.com</p>
                </div>
            </div>

            <div className="main-list">
            <div className="trevel-list">
              <ul>
                <li>My List</li>
                <li>My Requests</li>
                <li>My Credits</li>
                <li>My Info</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="account-list">
              <ul>
                <li>Travel</li>
                <li>Why Travel</li>
                <li>Become a Traveler</li>
                <li>How Its Works</li>
                <li>Traveling FAQs</li>
              </ul>
            </div>
            </div>
          </div>

          <div className="footer-list">
            <div className="footer-list-image">
              <div className="footer-side">
              <img src={side} alt="" />
              </div>

              <div className="footer-icons">
                <img id='face' src={facebook} alt="" />
                <img id='twit' src={Twitter} alt="" />
                <img src={g} alt="" />
                <img src={ins} alt="" />
              </div>
            </div>

            <div className="footer-list-text">
              <p>© 2021 RedExplorers. All rights reserved   |   Terms   |   Privacy   |   Site Map</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
