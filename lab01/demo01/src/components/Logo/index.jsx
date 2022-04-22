/**
 * Define function components for render logo
 */

import './style.css'

function Logo(props) {
  return(
    <img src={props.src} className="logo" alt='logo' />
  );
}

export default Logo;