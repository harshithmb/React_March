import React, { Component, useState } from 'react';
import TopBar from './components/TopBar/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import { NAME, cardData as cardDataAPI } from "./commonData";
import axios from 'axios';

// const App = () => {

//   const [userName, setUserName] = useState(NAME)

//   // 16.8
//   // 17+ 

//   return ( <div>
//     <TopBar/>
//     <Banner
//       title={`Welcome ${userName}`}
//       description="Shop here"
//       />
//       <div className="d-flex container justify-content-between">
//         {cardData.map((card, index) => 
//         <Card
//           name={card.name}
//           desc={card.desc}
//           index={index}
//           changeName={(name) => setUserName(name)}
//         />)}
//     </div>
//   </div> );
// }

// export default App;

//Mounting
//updating
//UnMounting


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Nikhil",
      cardData: [],
      showLoader: true,
      showJumbo: true
    }
    console.log("First Call - Constructor")
  }

  componentDidMount() {
    //call ur API
    console.log("componentDidMount - Mounting PHASE called only 1st Render")
    axios
      .get("https://5fc38a07e5c28f0016f54b09.mockapi.io/ajay/shoplane")
      .then(response => {
        this.setState({ cardData: response.data, showLoader: false })
      }
      )
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate - UPDATING PHASE 1st CALL")
    if (nextState.userName === "Men Navy Blue Solid Sweatshirt") {
      return true
    } else {
      return true
    }
  }

  componentDidUpdate() {
    //Call API
    console.log("componentDidUpdate every time ur component gets updated")
  }


  render() {
    let { userName, cardData, showLoader, showJumbo } = this.state;
    console.log("Second Call - Render")
    return (<div>
      <TopBar />
      <Banner
        title={`Welcome ${userName}`}
        description="Shop here to get Good products"
      />
      <button
        className="btn-primary m-2"
        onClick={() => this.setState({ showJumbo: true })}
      >
        Show Jumbotron
      </button>

      <button
        className="btn-secondary"
        onClick={() => this.setState({ showJumbo: false })}
      >
        Hide Jumbotron
      </button>

      {showJumbo && <Jumbotron
        title={userName}
        description="Hello Jumbotron Class Based Component"
      />}

      <div className="d-flex container justify-content-between row">

        {/* //12 grid col-4 col-3 */}
        {showLoader && <h1>Loading...</h1>}
        {cardData.map((card, index) => <Card
          data={card}
          key={index}
          changeName={
            (name) =>
              this.setState({
                userName: name
              })}
        />)}
      </div>

    </div>);
  }
}

export default App;

class Jumbotron extends Component {// CHild Component
  constructor(props) {
    super(props);
    this.state = {}
    console.log("First Call - Constructor Child Component")
  }

  componentDidMount() {
    console.log("Third Call - componentDidMount Child Component")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate - UPDATING PHASE 1st CALL Child Component")
    if (nextProps.title === "Men Navy Blue Solid Sweatshirt") {
      return false
    } else {
      return true
    }
  }
  componentWillUnmount() {
    console.log("Called before ur component dies")
  }

  render() {
    let { title, description } = this.props
    console.log("Second Call - render Child Component")
    return (<div className="jumbotron">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{description}</p>
    </div>);
  }
}
