import React from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css";
import "./global.css";


const SignIn = () => {
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
    <div className="frm-txtemailactive">
        <div className="tutto-ricco-pink-avatar-parent">
          <img
            className="tutto-ricco-pink-avatar"
            alt=""
            src="/tutto-ricco-pink-avatar@2x.png" />
          <b className="label">
            <span>{`Peer `}</span>
            <span className="connect">Connect</span>
          </b>
        </div>
        <div className="form">
          <div className="title">
            <div className="log-in-to">Sign in</div>
          </div>
          <div className="txtemailactive">
            <div className="email">Email</div>
          </div>
          <div className="txtpassword">
            <div className="password">
              <p className="password1">Password</p>
            </div>
          </div>
          <div className="forgotpassword">
            <div className="forgot-your-password">Forgot your password?</div>
          </div>
          <div className="btnlogin">
            <div className="log-in">Sign in</div>
          </div>
          <div className="or">
            <div className="or-child" />
            <div className="or-continue-with">or continue with</div>
            <div className="or-child" />
          </div>
          <div className="btngoogle">
            <img className="frame-icon" alt="" src="/frame.svg" />
            <div className="log-in1">Sign in with Google</div>
          </div>
          <div className="btnfacebook">
            <img className="frame-icon" alt="" src="/akariconsfacebookfill.svg" />
            <b className="log-in2">Log in</b>
          </div>
        </div>
        <div className="signuplink">
          <div className="dont-have-an-container">
            <span className="dont-have-an-container1">
              <span className="dont-have-an-account">
                <span className="connect"></span>
                <span>Don't have an account?</span>
              </span>
              <span className="connect">{` `}</span>
              <b className="sign-up">{`Sign up `}</b>
            </span>
          </div>
        </div>
      </div></>
  );
};

export default SignIn;
