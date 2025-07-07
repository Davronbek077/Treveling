import React from 'react'
import "./Contact.css"
import info1 from "../../assets/info1.png"
import info2 from "../../assets/info2.png"
import info3 from "../../assets/info3.png"
import info4 from "../../assets/info4.png"
import info5 from "../../assets/info5.png"
import info6 from "../../assets/info6.png"
import info7 from "../../assets/info7.png"

const Contact = () => {

  return (
    <div className='contact'>
      <div className="container">
        <div className="contact-wrapper">
        <div className="contact-title">
            <p>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</p>
        </div>

        <div className="contact-wrap">
            <div className="name-wrap">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>

            <div className="email-wrap">
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Subject' />
            </div>

            <div className="contact-message">
                <textarea placeholder="Message" />
            </div>

            <div className="contact-btn">
                <button>Submit</button>
            </div>

        </div>
        </div>

        <div className="info-wrapper">
          <div className="img-wrap">
            <img src={info1} alt="" />
            <img src={info2} alt="" />
            <img src={info3} alt="" />
            <img src={info4} alt="" />
            <img src={info5} alt="" />
            <img src={info6} alt="" />
            <img src={info7} alt="" />
          </div>

          <div className="input-wrap">
            <div className="input-text">
              <h3>Join <span>98,641</span> Monthly Readers. Subscribe Today!</h3>
            </div>

            <div className="input">
              <input type="email" placeholder='Email Address' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
