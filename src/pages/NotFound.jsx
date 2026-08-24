import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertCircle, Home, Phone, ArrowLeft } from "lucide-react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Human Remains Transfer</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="not-found-container text-center py-5 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 not-found-card p-5 shadow-lg rounded">
              <div className="icon-wrapper mb-4">
                <AlertCircle size={72} className="text-danger animate-bounce" />
              </div>
              <h1 className="display-3 font-weight-bold text-dark mb-2">404</h1>
              <h2 className="h4 text-secondary mb-4">Oops! Page Not Found</h2>
              <p className="text-muted mb-5 lead">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link to="/" className="btn btn-danger btn-lg d-flex align-items-center justify-content-center gap-2">
                  <Home size={18} />
                  <span>Go to Homepage</span>
                </Link>
                <Link to="/contact" className="btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center gap-2">
                  <Phone size={18} />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
