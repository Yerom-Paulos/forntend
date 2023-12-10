import React from 'react';
import { Link } from 'react-router-dom';
import "./Form.css";
import "./global.css";

const Form = () => {
  return (
    <><div className="navigation-bar">
    <div className="left">
      <div className="tutto-ricco-pink-avatar-parent">
        <img
          className="tutto-ricco-pink-avatar"
          alt=""
          src="/tutto-ricco-pink-avatar@2x.png"
        />
        <b className="label">
          <span>Peer</span>
          <span className="connect">Connect</span>
        </b>
      </div>
      <Link to="/Tutor" className="label1">Tutors</Link>
      <Link to="/pricing" className="label1">Pricing</Link>
      <Link to="/resources" className="label1">Resources</Link>
    </div>
    <div className="right">
      <Link to="/signin" className="label1">Sign in</Link>
      <div className="button">
      <Link to="/form" className="button">
            <img className="icon-left" alt="" src="/icon-left.svg" />
            <div className="action">Become a tutor</div>
            <img className="icon-left" alt="" src="/icon-right.svg" />
          </Link>
      </div>
    </div>
  </div>
  <div className="sign-in-form-black">
        <div className="column">
          <div className="navbar">
            <div className="tutto-ricco-pink-avatar-parent">
              <img
                className="tutto-ricco-pink-avatar"
                alt=""
                src="/tutto-ricco-pink-avatar@2x.png" />
              <b className="label">
                <span>Peer</span>
                <span className="connect">connect</span>
              </b>
            </div>
          </div>
          <div className="form">
            <div className="title">
              <div className="log-in-to">Become a tutor</div>
            </div>
            <div className="txtemailactive">
              <div className="email">Full Name</div>
            </div>
            <div className="txtemailactive1">
              <div className="email">Profession</div>
            </div>
            <div className="txtemailactive1">
              <div className="email">Higher Education</div>
            </div>
            <div className="txtpassword">
              <div className="password">
                <p className="location">Location</p>
              </div>
            </div>
            <div className="txtpassword">
              <div className="password">Availability</div>
            </div>
            <div className="txtemailactive1">
              <div className="email">Teaching Method</div>
            </div>
            <div className="txtemailactive1">
              <div className="email">Courses</div>
            </div>
            <div className="txtemailactive1">
              <div className="email">Rate per hour (ETB)</div>
            </div>
            <div className="forgotpassword">
              <div className="forgot-your-password">Forgot your password?</div>
            </div>
            <div className="btnlogin">
              <div className="email">Register</div>
            </div>
            <div className="btnfacebook">
              <img
                className="akar-iconsfacebook-fill"
                alt=""
                src="/akariconsfacebookfill.svg" />
              <b className="log-in1">Log in</b>
            </div>
          </div>
          <div className="footer">
            <div className="relume">© 2022 Relume</div>
          </div>
        </div>
        <div className="placeholder-image-wrapper">
          <img
            className="placeholder-image"
            alt=""
            src="/placeholder--image@2x.png" />
        </div>
      </div></>
  );
};

export default Form;
