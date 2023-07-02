import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="container-fluid fw-bolder ">
        <Link className="navbar-brand fs-3 text-light" href="/">
          <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaXbdWfcGz2HestBtTWvJ2oI4mryucUMk27rzRcoko_7W3GQAh7rbPnlTwdNcoDwPPK1XXXRN0KwYxrriBv0UDhhWlkhwuFMGCBEOpNxHXU-GdvxC7ObeVaKu14Afk3bAiGZcL1X3a2MWTG-SKIvOwEs93jZKwgAHxKEHVraq9i0rNKtGnSE0Ul4ZKrUEt17zOtBaqR2zFFToNSz-xXxCoYbgDNBpvkSFfxWOsum-O1QgG-AAL6K5To5IkYob-xb46jsZe1aJXd4zPpEB8n8lNPzPx7DreOlXMiM6Ps9ITBwr_wW2mlpu3gXwMz8MshyDgeU9_LCuazI-9TYNti-TNUPGZEDZg22ly3_eDFxHy4ZvLOrVf0xLbVHePEjxEADG3BcJSdV_n_jimAOuw3bOajhxriwO4k9m4UlgYqs1-zD9VmX12ZvM1_eYzk2nYZo7hWsarLNM9h3m03lKyVOtoFElcaokfyO0QblvYmJKbH90z5QNRif_eP6uho4dIvvsxhZQd8PoxjokkZDqdtH-CTaRU-fz4FDLoufQ0Wo3CZbjGzbm1GG9jTg3Sm9M_cX19cW0DLqxgunJYRAeh4RYTjV43eQ_mViZUW5Y7A0BhzRB-DtXqoe8uGAC98zjuh_8FUE3_LygYsNL9yzQs9-JDj64AYDjvEmGJ9KipL1JijHEVn7nLJ4y8WGaJ5BZEm_JSetYBE0oB1olVOrmvO4PwZF018itUdS4bp6lnPNeMWu8JK3Y1rqxQr_Pnf237fssiAx_pyvzMy2jDTbqwWNLBnIaG7wRN4B3x6aS6s8_r7PUy-oooSDKUjNIvIoqVL-Ju_7yWAMLJX6edqocRybljJFHuMDTYnyNnTfDoa99b8e7lflBgnpTL943PfzP-2rBW0yM2ALoDpB23g0Ho_jZff6iaOBlDfzYrnq1OrvWJj-NHui8MKkIP6BOPkPnqPpHo4ONHKwsF7OM-fw5w2EHo40ZVWc5mEQ=w1313-h577-s-no?authuser=2"
            width={130}
          />
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto">
            <li className="nav-item mx-auto">
              <Link
                className="nav-link text-light"
                aria-current="page"
                href="/"
              >
                <i className="fa-solid fa-house me-2"></i>
                HOME
              </Link>
            </li>

            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/gallery">
                <i className="fa-solid fa-photo-film me-2"></i>
                GALLERY
              </Link>
            </li>

            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/videogallery">
                <i className="fa-solid fa-video me-2"></i>
                VIDEO GALLERY
              </Link>
            </li>
            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/book">
                <i className="fa-solid fa-address-card me-2"></i>
                BOOK ORDER
              </Link>
            </li>
            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/about">
                <i className="fa-solid fa-address-card me-2"></i>
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
