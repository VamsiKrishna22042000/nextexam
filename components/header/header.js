import Link from "next/link";
import HeaderLogo from "./headerLogo";
import Navigation from "./navigation";

//import styles from "./header.module.scss";
// import AboutUs from '../../pages/AboutUs';

// import { Facebook } from 'react-bootstrap-icons';
// import { Twitter } from 'react-bootstrap-icons';
// import { Instagram } from 'react-bootstrap-icons';
// import { Search } from 'react-bootstrap-icons';
// import { X } from 'react-bootstrap-icons';
import SocialLinks from "./socialLinks";
//import Search from './Search';
import { useState } from "react";

const Header = () => {
  const [showDropdown, setDropdown] = useState(false);
  console.log(showDropdown);

  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <HeaderLogo />

          <Navigation />

          {/* <Search /> */}

          <SocialLinks />
        </div>
      </header>
    </div>
  );
};

export default Header;
