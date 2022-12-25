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
        Copyright &copy; 2021.{" "} All rights reserved.<br/>
        This application was developed for educational and entertainment purposes {" "}<br/>
        <a href="https://www.linkedin.com/in/shriman-vinayagamoorthy-3941a81a8" className="text-muted">
          by<br/> Shriman Vinayagamoorthy
        </a>
        <br/>
        Email: shriman30@hotmail.com
      </p>
    </footer>
  )
}

export default Footer
