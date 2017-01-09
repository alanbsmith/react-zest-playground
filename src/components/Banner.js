import React from 'react';
import '../assets/stylesheets/Banner.scss';


const Banner = (props) => {
  const bannerClasses = props.show ? 'banner' : 'banner hide';
  const bannerText = props.showLogin ? 'Login Success!' : 'Sign Up Success!';
  return (
    <div className={bannerClasses}>
      <p className="banner__text">{bannerText}</p>
    </div>
  )
}

export default Banner;
