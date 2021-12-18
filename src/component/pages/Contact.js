import React from 'react';

function Contact() {
    return (
        <div>

            <div className="py-4 bg-warning">
                <div className="container">
                <h4 className="text-center">Contact Us</h4>
                </div>
            </div>

            <div className="py-5 bg-light border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <h4 className="text-center">Contact Information</h4>
                <div className="divider"></div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </p>
                <div className="card card-body">
                <div className="row">
                    <div className="col-md-6">
                    <label>Full Name</label>
                    <input type="text" name="fullname" className="form-control" />
                    </div>
                    <div className="col-md-6">
                    <label>Email Id</label>
                    <input type="email" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6">
                    <label>Phone Number</label>
                    <input type="text" name="phone" className="form-control" />
                    </div>
                    <div className="col-md-6">
                    <label>Subject</label>
                    <input type="text" name="subject" className="form-control" />
                    </div>
                    <div className="col-md-12">
                    <label>Message</label>
                    <textarea row="3" name="message" className="form-control"></textarea>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary px-5 py-2 mt-3">Send Message</button>
                    </div>
                </div>
                </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-body shadow">
                        <p>Email Us: info@example.com</p>
                        <p>Call Us: +880 1672880108</p>
                        <p>Web Site: osmanforhad.net</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
