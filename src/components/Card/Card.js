import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addProduct, removeProduct, addProductAPI } from '../../actions';

const Card = ({data, changeName, index, addContentToCart, removeProductFromCart}) => {
  let {description, name} = data
  
    return ( <div key={index}className="card m-2 col-3" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{
      description.length > 30 ? 
      `${description.substring(0,30)}...` : 
      description}</p>
      <button 
        className="btn btn-primary"
        onClick={() => addContentToCart(data)}
        >
            Add to Cart
        </button>
        <button 
        className="btn btn-secondary ml-2"
        onClick={() => removeProductFromCart(data)}
        >
            Remove From Cart
        </button>
    </div>
  </div> );
}
 
Card.propTypes = {
  data:  PropTypes.object.isRequired,
  index: PropTypes.array
}

Card.defaultProps = {
  data:  {description: "Hey this is default desc", name: "This is default Name"}
}

const mapDispatchToProps = (dispatch) => ({
  addContentToCart: (data) => dispatch(addProductAPI(data)),
  removeProductFromCart: (data) => dispatch(removeProduct(data))
})


export default connect(null, mapDispatchToProps)(Card)
