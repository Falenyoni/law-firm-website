
import React from 'react';
import '../styles/AboutPage.css';
import lawyerImage from '../images/lawyer.png'

function AboutPage({id}) {
  return (   
    <div id={id} className="aboutus-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h2 className="aboutus-title">About Us</h2>
                        <p className="aboutus-text">ZMN Attorneys is a black female owned law firm situated in Johannesburg South africa. </p>
                        <p className="aboutus-text">Zanele Michelle Ncube graduated at the University of witwatersrand in 2015 where she studied Law (LLB). She is a positive person who enjoys the challenges of working on difficult tasks and projects. Over the years she has built up numerous skills and qualities as she has experience working within different fields in the legal industry.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Vision</h4>
                                    <p>To make a positive contribution in the legal industry</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Mission</h4>
                                    <p>We seek to serve and make sure that people's needs are met. To provide efficient service with the aim of cultivating long-term relationships. </p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Great support</h4>
                                    <p>Our team of experienced attorneys will work hard to ensure that your rights are protected and your best interests are represented</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutPage;