import React from 'react';

const Card = ({data, changeName, index}) => {
  let {brand, description, name, preview, price} = data
    const callFuncOnClick = (e) => {
        changeName(name)
    }
    return ( <div key={index}className="card m-2 col-3" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{
      description.length > 30 ? 
      `${description.substring(0,30)}...` : 
      description}</p>
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