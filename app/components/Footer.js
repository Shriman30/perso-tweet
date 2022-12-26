import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <Link to="/" className="mx-1">
          Home
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/about-us">
          About Us
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/terms">
          Terms
        </Link>
      </p>
      <p className="m-0">
        Copyright &copy; 2020{" "}. All rights reserved.<br/>
        This web app was created for entertainment and education purposes only<br/>
        <a href="https://www.linkedin.com/in/shriman-vinayagamoorthy-3941a81a8" className="text-muted">
          by Shriman Vinayagamoorthy
        </a>
        

      </p>
    </footer>
  )
}

export default Footer
