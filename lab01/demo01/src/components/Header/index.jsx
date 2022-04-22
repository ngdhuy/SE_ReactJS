/**
 * Define class component for render header
 */
import React from 'react';
import './style.css';
import Logo from '../Logo';

class Header extends React.Component {
  constructor(props) {
    super();
  }
 
  render() {
    return(
      <div className="header">
        <h1>Hello ReactJS</h1>
        <Logo src={this.props.logo} />
      </div>
    );
  }
}

export default Header;