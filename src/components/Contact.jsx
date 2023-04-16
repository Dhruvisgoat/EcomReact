import React from 'react'

const Contact = () => {
  return (
    <>
        <footer className="Footer">
        <div className="FooterContact">
          <div className="FooterContactTitle">Contact Us</div>
          <form className="FooterContactForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="FooterCopyRight">
            <div className="FooterCopyRightTitle">CopyRight</div>
            <div className="FooterCopyRightText">All Rights Reserved</div>
        </div>  
      </footer>
    </>
  )
}

export default Contact;