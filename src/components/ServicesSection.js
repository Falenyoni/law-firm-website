import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faGavel,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ServicesSection.css";

function ServicesSection({ id }) {
  return (
    <section id={id} class="bg-light pt-100 pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 class="title">
              What <span>Service</span> We Offer
            </h2>
            <p className=" mt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              optio velit inventore, expedita quo laboriosam possimus ea
              consequatur vitae, doloribus consequuntur ex. Nemo assumenda
              laborum vel, labore ut velit dignissimos.
            </p>
            <a className="btn btn-primary my-5" href="#">
              More Info{" "}
            </a>
          </div>
          <div className="col-lg-7">
            <div className="row card-items">
              <div className="col-lg-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-laptop"></i>
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <i classNamess="bi bi-droplet-half"></i>
                    <h5 className="card-title">UX/UI Design</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <i>
                      <FontAwesomeIcon icon={faGavel} size="3x" />
                    </i>
                    <h5 className="card-title"> Digital Marketing</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-phone"></i>
                    <h5 className="card-title"> Mobile App Development</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
