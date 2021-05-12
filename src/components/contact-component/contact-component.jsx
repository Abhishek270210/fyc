import React, { Component } from 'react'
import './contact-component-style.css'

class Contactcomponent extends Component {
    render() {
        return (
            <div>

                <div className="container contact-component">
                   <section>
                       <h1 className="h1-responsive font-weight-bold text-centre my-2 py-5">CONTACT US</h1>
                     <h4 className="text-centre mx-auto mb-2 w-responsive">Please provide the feedback and mail for any query. <br></br> Thanks for visiting...</h4>
                  
                     <div className="row">
                      <div className="col-md-9 mb-md-0 mb-5">
                          <form id="contact-form">
                             
                             <div className="row">
                              <div className="col-md-6">
                                <div className="md-form mb-0">
                                <label for="name" className="mt-4 font-weight-bold">Your Name</label>
                                <input type="text" name='name' className="form-control" />
                                
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="md-form mb-0">
                                <label for="email" className="mt-4 font-weight-bold">Your Email</label>  
                                <input type="text" name='email' className="form-control" />
                               
                                </div>

                              </div>

                             </div>

                            <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                <label for="subject" className="mt-4 font-weight-bold">Subject</label>
                                    <input type="text" name="subject" className="form-control" />
                                 
                                </div>
                            </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                    <label for="message" className="mt-4 font-weight-bold">Your message</label>
                                        <textarea type="text" name="message" rows="3" className="form-control md-textarea"></textarea>
                                      
                                    </div>
                                </div>
                            </div>

                            <div className="text-centre text-md-left ">
                                <button className="btn btn-primary my-4">Send</button>
                            </div>

                          </form>
                      </div>

                     </div>
                   </section>
                </div>
                
            </div>
        )
    }
}

export default Contactcomponent
