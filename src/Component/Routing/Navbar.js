/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Course from "../CourseModule/Course";
import Associate from "../AssociateModule/Associate";
import Admission from "../AdmissionModule/Admission";

const Navbar = () => {
  return (
    <>
      <>
        <Router>
          <div class="text-center">
            <nav class="navbar navbar-expand-lg bg-dark ">
              <div class="container-fluid">
            
                <a class="navbar-brand text-danger fs-3" href="#">
                  TekGain
                </a>
              </div>
              <form class="d-flex">
                {/* Use Link components for navigation */}
                <button class="btn btn-info  me-2 " type="button">
                  <Link to="/Course" class="text-dark text-decoration-none">
                    Course
                  </Link>
                </button>
                &nbsp;
                <button class="btn btn-info  me-2" type="button">
                  <Link
                    to="/Association"
                    class="text-dark text-decoration-none"
                  >
                    Associate
                  </Link>
                </button>
                &nbsp;
                <button class="btn btn-info  me-2" type="button">
                  <Link to="/Admission" class="text-dark text-decoration-none">
                    Admission
                  </Link>
                  &nbsp;
                </button>
              </form>
            </nav>

            <Switch>
              {/* Define routes for your components */}
              <Route path="/Course" exact component={Course} />

              <Route path="/Association" exact component={Associate} />
              <Route path="/Admission" exact component={Admission} />
            </Switch>
          </div>
        </Router>
      </>
    </>
  );
};
export default Navbar;
