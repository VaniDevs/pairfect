import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import whiteLogoImage from '../../assets/brandWhiteLogo.png';

const Header = () => {
  const containerStyles = {
    backgroundColor:"#16ada5",
    height: "80px"
  };

  const logoStyles = {
    float: "left",
    width: "126px",
    height: "33px",
    marginLeft: 50,
    marginTop: 20
  };

  const regButtonStyles = {
    marginLeft: 20,
    marginRight: 20,
    color: "white",
    float: "right",
    backgroundColor: "#16ada5",
    borderColor: "white",
    marginTop: 20
  };

  const signInButtonStyles = {
    marginLeft: 20,
    marginRight: 20,
    color: "white",
    float: "right",
    backgroundColor: "#16ada5",
    borderColor: "#16ada5",
    marginTop: 20,
    paddingTop: 10
  };

  // The Sign in button displays first!
  return (
    <div style={containerStyles}>
      <IndexLink to="/" activeClassName="active">
        <img src={whiteLogoImage} style={logoStyles}/>
      </IndexLink>
      <div>
      </div>
      <Link to="/register" activeClassName="active">
        <div className="btn" style={regButtonStyles}>Register as organization</div>
      </Link>
      <Link to="/signIn" activeClassName="active">
        <div type="primary" style={signInButtonStyles}>Sign in</div>
      </Link>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
