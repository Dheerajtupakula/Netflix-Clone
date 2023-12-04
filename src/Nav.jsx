import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [onShow, setOnShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setOnShow(true);
      } else {
        setOnShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  return (
    <div className={`nav ${onShow && "show-nav"}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/330px-Netflix_Logomark.png"
        alt=""
      />
      <img
        className="avatar"
        src="https://occ-0-7679-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
        alt=""
      />
    </div>
  );
}

export default Nav;
