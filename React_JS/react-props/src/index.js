import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return (<div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>);
}
ReactDOM.render(
  <div className="my-style">
    <h1>My Contacts</h1>
    <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tel="415.837.8361" 
      email="andyww09@gmail.com"
    />
    <Card 
      name="Andy" 
      img="https://media-exp1.licdn.com/dms/image/C5603AQHpl03QHs-fag/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=NbhNGiSku1kOFmD83qEChpnvl91M0oMZQQuU3WDoQqM" 
      tel="415.837.8361" 
      email="andyww09@gmail.com"
    /> 
    <input id="fName" placholder="Enter your first name" value="Andy Wu"/>
  </div>,
  document.getElementById("root")
);
