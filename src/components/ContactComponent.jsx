import React from 'react';
import contactimage from '../assets/contact.jpg'

const ContactComponent = () => {
  return (
    <div className='container'>
        <h2 className="text-center text-primary mt-5"><i class="bi bi-person-lines-fill"></i> Contact</h2>
        <div className="row align-items-center my-5 gap-5 gap-sm-5 gap-md-0 gap-lg-0">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <img src={contactimage} className='img-fluid img-thumbnail rounded-4' alt="" />
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <form action="">
                    <p>
                        Name : <input type="text" name='name' placeholder='Enter Name' className='form-control' />
                    </p>
                    <p>
                        Email : <input type="email" name='email' placeholder='Enter Email' className='form-control' />
                    </p>
                    <p>
                        Message : <textarea name="message" className='form-control' cols="30" rows="2"></textarea>
                    </p>
                    <p>
                        <button className='btn btn-primary w-100'>Contact Us</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactComponent