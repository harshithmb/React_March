import React, { Component, useState } from 'react';
import TopBar from './components/TopBar/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import {NAME, cardData} from "./commonData";

const App = () => {

  const [userName, setUserName] = useState(NAME)

  // 16.8
  // 17+ 

  return ( <div>
    <TopBar/>
    <Banner
      title={`Welcome ${userName}`}
      description="Shop here"
      />
      <div className="d-flex container justify-content-between">
        {cardData.map((card, index) => 
        <Card
          name={card.name}
          desc={card.desc}
          index={index}
          changeName={(name) => setUserName(name)}
        />)}
    </div>
  </div> );
}
 
export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       userName: "Nikhil",
//       cardData: 
//      }
//   }
//   render() { 
//     let {userName, cardData} = this.state;
//     return ( <div>
//       <TopBar/>
//       <Banner 
//         title={`Welcome ${userName}`}
//         description="Shop here to get Good products"
//       />
//       <div className="d-flex container justify-content-between">
//         {cardData.map((card, index) => <Card 
//           name={card.name}
//           desc={card.desc}
//           key={index}
//           changeName={
//             (name) => 
//             this.setState({
//               userName: name
//             })}
//           />)}
//         </div>
      
//     </div> );
//   }
// }
 
// export default App;