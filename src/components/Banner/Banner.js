import React from 'react';

const Banner = ({title, description}) => {
    return ( <div className="jumbotron">
    <h1 className="display-4">{title}</h1>
    <p className="lead">{description}</p>
  </div> );
}
 
export default Banner;