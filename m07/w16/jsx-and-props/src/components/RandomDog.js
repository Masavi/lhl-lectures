import DogHobbies from "./DogHobbies";

function RandomDog(props) {
  // console.log('PROPS:', props);
  return (
    <>
      <h3> Name: {props.name} </h3>
      { props.testMessage ? <p>{props.testMessage}</p> : null }
      {/* <p> { props.testMessage ? props.testMessage : 'default text :)'} </p> */}
      <img
        src="https://www.petfinder.com/static/2b115811bc35e53f054c606bdbb15d9c/eebd8/teddybear-dog-breeds.jpg"
        alt="" />

      {/* This way, we only render the "DogHobbies" component if we have the props */}
      { props.hobbies && <DogHobbies hobbies={props.hobbies} /> }
    </>
  )
}

export default RandomDog;
