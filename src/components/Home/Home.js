

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getShopLane } from '../../commonData';
import Card from "../Card/Card";

const Button = ({onClick, text, style}) => <button 
                                                onClick={onClick} 
                                                style={style}
                                            >
                                                {text}
                                            </button>

const buttonWithStyle = (CompParams) => {
    const buttonStyles = {
        backgroundColor: "red",
        padding: "3 rem"
    }

    return (props) => <CompParams {...props} style={buttonStyles}/>
}

const NewButton = buttonWithStyle(Button)

const Home = (props) => {
    const [shopData, setShopData] = useState([])

    useEffect(() => {
        axios.get(getShopLane).then((res) =>
         setShopData(res.data)
        )
    }, [])

    return ( <> 

        <h1>Home Page...</h1>
        <Button text="No Style" onClick onMouseEnter/>
        <NewButton text="Styled Button" style={{backgroundColor: "yellow"}}onClick={() => console.log("Clicked Styled")}/>
    
    <div className="d-flex ">
    {
        shopData?.map((item, index) => <Card 
            data={item}
            index={index}
        />)
    }
    </div>
        
    
    
    </> );
}
 
export default Home;

// /Folder Structure
// src
//     App.js
//     index.js
//     components 
//         -Auth
//             - SignIn.js
//             - SignUp.js
//             - forgetPassword.js
//             - ResetPassword.js
//         -Header
//             - Header.js
//         -Footer
//             - Footer.js
//     assets
//         -Images
//         -fonts
//     styles
//         -Button
//             -StyledButton.js
//             -StyledButton.css
//     utils
//         -generateRandomNumber.js
//     shared
//         -InputTextField.js
//         -TextAreaField.js

        
