import React from 'react';



const Character = props => {

  return (

    <div>

      Name: {props.character.name}<br />

      hair_color: {props.character.hair_color}<br />
     
      gender: {props.character.gender}<br />
     
      height: {props.character.height}<br />
     
      eye_color: {props.character.eye_color}<br />
      
      homeworld: {props.character.homeworld}<br />
      

    </div>

  );

};



export default Character;