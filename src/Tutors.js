import React from 'react';
import { Link } from 'react-router-dom';
import "./Tutor.css";
import "./global.css";

const Tutor = () => {
  return (
    <div className="tutor">
      <div className="filter">
        <div className="filters-parent">
          <b className="filters">Filters</b>
          <div className="location-parent">
            <div className="location">Location</div>
            <div className="frame-parent">
              <div className="group-parent">
                <img className="frame-child" alt="" src="/group-1.svg" />
                <div className="near-me">Near me</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">Within 5 km</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">Within 10 km</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">Within 20 km</div>
              </div>
            </div>
          </div>
          <div className="rate-hour-parent">
            <div className="rate-hour">
              <span className="rate">{`Rate `}</span>
              <span className="hour">/hour</span>
            </div>
            <div className="frame-group">
              <div className="hourly-wrapper">
                <div className="near-me">Hourly</div>
              </div>
              <div className="monthly-wrapper">
                <div className="near-me">Monthly</div>
              </div>
              <div className="yearly-wrapper">
                <div className="yearly">Yearly</div>
              </div>
            </div>
            <div className="frame-container">
              <div className="group-parent">
                <img className="frame-child" alt="" src="/group-11.svg" />
                <div className="near-me">Any</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">100 - 300</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">300 - 500</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">500 - 800</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">{`> 800`}</div>
              </div>
            </div>
          </div>
          <div className="location-parent">
            <div className="location">Work experience</div>
            <div className="frame-parent">
              <div className="group-parent">
                <img className="frame-child" alt="" src="/group-12.svg" />
                <div className="near-me">Any experience</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">Student</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">Teacher</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">Professional Teacher</div>
              </div>
              <div className="group-parent">
                <div className="frame-item" />
                <div className="near-me">{`> 3 Years`}</div>
              </div>
            </div>
          </div>
          <div className="location-parent">
            <div className="location">Available week days</div>
            <div className="frame-parent">
              <div className="group-parent">
                <div className="rectangle-parent">
                  <div className="group-child" />
                  <img className="check-icon" alt="" src="/check.svg" />
                </div>
                <div className="near-me">Monday</div>
              </div>
              <div className="group-parent">
                <div className="rectangle-div" />
                <div className="near-me">Tuesday</div>
              </div>
              <div className="group-parent">
                <div className="rectangle-div" />
                <div className="near-me">Wednesday</div>
              </div>
              <div className="group-parent">
                <div className="rectangle-div" />
                <div className="near-me">Thursday</div>
              </div>
              <div className="group-parent">
                <div className="rectangle-div" />
                <div className="near-me">Friday</div>
              </div>
              <div className="group-parent">
                <div className="rectangle-div" />
                <div className="near-me">Saturday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="group-group">
          <div className="group">
            <div className="frame-parent3">
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
              <div className="frame-parent4">
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
                <div className="frame-child14" />
              </div>
            </div>
          </div>
          <div className="group-item" />
        </div>
        <div className="frame-parent14">
          <div className="find-your-perfect-tutor-today-parent">
            <b className="find-your-perfect-container">
              <span>{`Find your `}</span>
              <span className="perfect-tutor">{`perfect tutor `}</span>
              <span>today</span>
            </b>
            <div className="tailored-learning-experiences">
              Tailored Learning Experiences, Right at Your Doorstep - Connect
              with the Ideal Home Tutor to Achieve Academic Excellence
            </div>
            <img className="line-icon" alt="" src="/line.svg" />
          </div>
          <div className="frame-parent15">
            <div className="magnifyingglass-parent">
              <img
                className="magnifyingglass-icon"
                alt=""
                src="/magnifyingglass.svg"
              />
              <div className="near-me">
                What subject tutor are you looking for ?
              </div>
            </div>
            <div className="mappinline-parent">
              <img
                className="magnifyingglass-icon"
                alt=""
                src="/mappinline.svg"
              />
              <div className="near-me">Location</div>
            </div>
            <div className="button">
              <div className="find-tutor">Find tutor</div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="navigation-bar">
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
 

      <div className="cards">
        <div className="frame-parent16">
          <div className="tutors-wrapper">
            <b className="near-me">317 Tutors</b>
          </div>
          <div className="frame-parent17">
            <img className="frame-icon" alt="" src="/frame-17@2x.png" />
            <div className="frame-parent18">
              <div className="frame-parent19">
                <div className="frame-parent20">
                  <div className="abebe-bikila-parent">
                    <div className="yearly">Abebe Bikila</div>
                    <img
                      className="medallions-icon"
                      alt=""
                      src="/medallions.svg"
                    />
                  </div>
                  <div className="teacher-masters-degree-wrapper">
                    <div className="near-me">{`Teacher • Master’s Degree `}</div>
                  </div>
                </div>
                <div className="frame-parent21">
                  <div className="mappinline-group">
                    <img className="clock-icon" alt="" src="/mappinline1.svg" />
                    <div className="near-me">Mexico, AA</div>
                  </div>
                  <div className="frame-child134" />
                  <div className="clock-parent">
                    <img className="clock-icon" alt="" src="/clock.svg" />
                    <div className="near-me">Full time</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="clock-icon"
                      alt=""
                      src="/currencydollar.svg"
                    />
                    <div className="near-me">350/hr</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="calendarblank-icon"
                      alt=""
                      src="/calendarblank.svg"
                    />
                    <div className="near-me">5+ Certificates</div>
                  </div>
                </div>
              </div>
              <div className="certified-math-and">
                Certified Math and Physics Tutor with a Master's degree. 5+
                years experience. Specializing in SAT prep. Let's reach your
                goals together!
              </div>
            </div>
          </div>
          <div className="frame-parent17">
            <img className="frame-icon" alt="" src="/frame-171@2x.png" />
            <div className="frame-parent18">
              <div className="frame-parent19">
                <div className="frame-parent20">
                  <div className="abebe-bikila-parent">
                    <div className="yearly">Kenenisa Alemayehu</div>
                    <img
                      className="medallions-icon1"
                      alt=""
                      src="/medallions1.svg"
                    />
                  </div>
                  <div className="teacher-masters-degree-wrapper">
                    <div className="near-me">{`Student • Computer Science `}</div>
                  </div>
                </div>
                <div className="frame-parent21">
                  <div className="mappinline-group">
                    <img className="clock-icon" alt="" src="/mappinline2.svg" />
                    <div className="near-me">4Kilo, AA</div>
                  </div>
                  <div className="frame-child134" />
                  <div className="clock-parent">
                    <img className="clock-icon" alt="" src="/clock1.svg" />
                    <div className="near-me">Full time</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="clock-icon"
                      alt=""
                      src="/currencydollar1.svg"
                    />
                    <div className="near-me">150/hr</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="calendarblank-icon"
                      alt=""
                      src="/calendarblank1.svg"
                    />
                    <div className="near-me">2+ Certificates</div>
                  </div>
                </div>
              </div>
              <div className="certified-math-and">
                Certified Math and Physics Tutor with a Master's degree. 5+
                years experience. Specializing in SAT prep. Let's reach your
                goals together!
              </div>
            </div>
          </div>
          <div className="frame-parent17">
            <img className="frame-icon" alt="" src="/frame-172@2x.png" />
            <div className="frame-parent18">
              <div className="frame-parent19">
                <div className="frame-parent20">
                  <div className="abebe-bikila-parent">
                    <div className="yearly">Ebenezer Shimels</div>
                    <img
                      className="medallions-icon1"
                      alt=""
                      src="/medallions2.svg"
                    />
                  </div>
                  <div className="teacher-masters-degree-wrapper">
                    <div className="near-me">{`Teacher • Bachelor's Degree `}</div>
                  </div>
                </div>
                <div className="frame-parent21">
                  <div className="mappinline-group">
                    <img className="clock-icon" alt="" src="/mappinline3.svg" />
                    <div className="near-me">Piassa, AA</div>
                  </div>
                  <div className="frame-child134" />
                  <div className="clock-parent">
                    <img className="clock-icon" alt="" src="/clock2.svg" />
                    <div className="near-me">Full time</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="clock-icon"
                      alt=""
                      src="/currencydollar2.svg"
                    />
                    <div className="near-me">250/hr</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="calendarblank-icon"
                      alt=""
                      src="/calendarblank2.svg"
                    />
                    <div className="near-me">4+ Certificates</div>
                  </div>
                </div>
              </div>
              <div className="certified-math-and">
                Certified Math and Physics Tutor with a Master's degree. 5+
                years experience. Specializing in SAT prep. Let's reach your
                goals together!
              </div>
            </div>
          </div>
          <div className="frame-parent17">
            <img className="frame-icon" alt="" src="/frame-173@2x.png" />
            <div className="frame-parent18">
              <div className="frame-parent19">
                <div className="frame-parent20">
                  <div className="mamo-kilo-wrapper">
                    <div className="yearly">Mamo Kilo</div>
                  </div>
                  <div className="teacher-masters-degree-wrapper">
                    <div className="near-me">{`Teacher • Level 2 Diploma `}</div>
                  </div>
                </div>
                <div className="frame-parent21">
                  <div className="mappinline-group">
                    <img className="clock-icon" alt="" src="/mappinline4.svg" />
                    <div className="near-me">Mexico, AA</div>
                  </div>
                  <div className="frame-child134" />
                  <div className="clock-parent">
                    <img className="clock-icon" alt="" src="/clock3.svg" />
                    <div className="near-me">Full time</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="clock-icon"
                      alt=""
                      src="/currencydollar3.svg"
                    />
                    <div className="near-me">150/hr</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="calendarblank-icon"
                      alt=""
                      src="/calendarblank3.svg"
                    />
                    <div className="near-me">1+ Certificates</div>
                  </div>
                </div>
              </div>
              <div className="certified-math-and">
                Certified Math and Physics Tutor with a Master's degree. 5+
                years experience. Specializing in SAT prep. Let's reach your
                goals together!
              </div>
            </div>
          </div>
          <div className="frame-parent17">
            <img className="frame-icon" alt="" src="/frame-174@2x.png" />
            <div className="frame-parent18">
              <div className="frame-parent19">
                <div className="frame-parent20">
                  <div className="mamo-kilo-wrapper">
                    <div className="yearly">Chala Chube Chebete</div>
                  </div>
                  <div className="teacher-masters-degree-wrapper">
                    <div className="near-me">{`Teacher • Bachelor's Degree `}</div>
                  </div>
                </div>
                <div className="frame-parent21">
                  <div className="mappinline-group">
                    <img className="clock-icon" alt="" src="/mappinline5.svg" />
                    <div className="near-me">Mexico, AA</div>
                  </div>
                  <div className="frame-child134" />
                  <div className="clock-parent">
                    <img className="clock-icon" alt="" src="/clock4.svg" />
                    <div className="near-me">Full time</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="clock-icon"
                      alt=""
                      src="/currencydollar4.svg"
                    />
                    <div className="near-me">350/hr</div>
                  </div>
                  <div className="frame-child135" />
                  <div className="mappinline-group">
                    <img
                      className="calendarblank-icon"
                      alt=""
                      src="/calendarblank4.svg"
                    />
                    <div className="near-me">4+ Certificates</div>
                  </div>
                </div>
              </div>
              <div className="certified-math-and">
                Certified Math and Physics Tutor with a Master's degree. 5+
                years experience. Specializing in SAT prep. Let's reach your
                goals together!
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <div className="button2">
            <img className="chevron-down-icon" alt="" src="/chevron-down.svg" />
          </div>
          <div className="button3">
            <b className="near-me">1</b>
          </div>
          <div className="button2">
            <div className="near-me">2</div>
          </div>
          <div className="button2">
            <div className="near-me">3</div>
          </div>
          <div className="button2">
            <div className="near-me">4</div>
          </div>
          <div className="button2">
            <div className="near-me">5</div>
          </div>
          <div className="button2">
            <img
              className="chevron-down-icon"
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
