import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="py-5 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-center text-white">Welcome to React Hook Website</h5>
                        <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About Us</Link></div>
                        <div><Link to="/contact">Contact Us</Link></div>
                        <div><Link to="/service">Services</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
