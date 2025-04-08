import React from 'react';
import aboutimage from '../assets/about.jpg';
import { Link } from 'react-router-dom';

const AboutComponent = () => {
  return (
    <div className='container'>
        <h2 className="text-center text-primary mt-5"><i class="bi bi-file-earmark-person-fill"></i> About Us</h2>
        <div className="row align-items-center mt-5 mb-5">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <h2>Welcome to Travelly</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta modi debitis ratione, accusamus eveniet accusantium nam omnis ad maiores quos architecto quia, magnam facere! Sint saepe culpa impedit vitae eaque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestias, placeat necessitatibus pariatur, in vitae modi sequi assumenda molestiae saepe magnam dignissimos. Voluptas mollitia quas eius, aspernatur impedit accusamus fuga!</p>
                <p><Link to={'/about'}><button className='btn btn-warning'>Read More</button></Link></p>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <img src={aboutimage} className='img-fluid img-thumbnail w-100' alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutComponent