import React from 'react';

const Card = ({name, desc, changeName, index}) => {

    const callFuncOnClick = (e) => {
        changeName(name)
    }
    return ( <div key={index}className="card m-2" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{desc}</p>
      <button 
        className="btn btn-primary"
        onClick={callFuncOnClick}
        >
            Click to Change Name
        </button>
    </div>
  </div> );
}
 
export default Card;