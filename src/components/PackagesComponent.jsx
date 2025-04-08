import React from 'react';
import pack1 from '../assets/pack1.jpg'
import pack2 from '../assets/pack2.jpg'
import pack3 from '../assets/pack3.jpg'
import pack4 from '../assets/pack4.jpg'
import pack5 from '../assets/pack5.jpg'
import pack6 from '../assets/pack6.jpg'
import pack7 from '../assets/pack7.jpg'
import pack8 from '../assets/pack8.jpg'
import { Link } from 'react-router-dom';

const PackagesComponent = () => {
    const packages = [
        {
            id: 1,
            name: 'Package 1',
            description: "Get low budget holiday packages from travely.",
            image: pack1,
            price: 5000
        },
        {
            id: 2,
            name: 'Package 2',
            description: "Get low budget holiday packages from travely.",
            image: pack2,
            price: 5000
        },
        {
            id: 3,
            name: 'Package 3',
            description: "Get low budget holiday packages from travely.",
            image: pack3,
            price: 5000
        },
        {
            id: 4,
            name: 'Package 4',
            description: "Get low budget holiday packages from travely.",
            image: pack4,
            price: 5000
        },
    ]
    return (
        <div className='container'>
            <h2 className="text-center text-primary mt-5"><i class="bi bi-box-seam"></i> Packages</h2>
            <div className="row mt-5 align-items-center gap-sm-2 gap-lg-0 gap-md-0 gap-4">
                {
                    packages.map((item, index) => {
                        return (
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div class="card" style={{ width: '18rem' }}>
                                    <img src={item.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <p className="card-text">Price: ₹ {item.price}</p>
                                        <a href="#" class="btn btn-primary">Get Details</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row mt-5 align-items-center gap-sm-2 gap-lg-0 gap-md-0 gap-4">
                {
                    packages.map((item, index) => {
                        return (
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div class="card" style={{ width: '18rem' }}>
                                    <img src={item.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <p className="card-text">Price: ₹ {item.price}</p>
                                        <a href="#" class="btn btn-primary">Get Details</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className='text-center mt-5 mb-5'><Link to={'/packages'}><button className="btn btn-warning">Load More</button></Link></p>
        </div>
    )
}

export default PackagesComponent