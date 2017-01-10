import React from 'react';
import classnames from 'classnames';
import '../assets/stylesheets/Banner.scss';


const Banner = (props) => {
  const bannerClasses = classnames('banner', props.type, { hide: !props.show });
  return (
    <div className={bannerClasses}>
      <p className="banner__text">{props.text}</p>
    </div>
  )
}

export default Banner;
