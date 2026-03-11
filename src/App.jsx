
import './App.css'

function App() {


  return (
    <>

      <h1>Vite + React</h1>
      <Device name="iPhone 16" brand="apple" price="$1000"></Device>
      <Device name="samsung s22" brand="samsung" price="$800"></Device>
      <Device name="Laptop" brand="" price="$1500"></Device>

      <Developer name= "Abul" tech = "JS" experience = "5 years"></Developer>
      <Developer name= "Mobul" tech = "python" experience = "3 years"></Developer>
      <Developer name= "Kobul" tech = "Java" experience = "7 years"></Developer>
    </>
  )
}


function Device(props) {

  return (

    <div className='device-box'>

      <p>Name : {props.name}</p>
      <p>Brand : {props.brand}</p>
      <p>Price : {props.price}</p>

    </div>

  )
}

function Developer(props) {


  const developerStyle = {

    color: "yellow",
    border: "5px solid red",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px"
  }

  return (
    <div style={developerStyle}>
      <p>Name : {props.name}</p>
      <p>Technology : {props.tech}</p>
      <p>Experience : {props.experience}</p>
    </div>
  )
}


function Paragraph() {

  const name = "Taj";
  const age = 20;
  const country = "Bangladesh";

  return (

    <p>Hello World . My name is {name} . I am {age} years old . I live in {country}</p>
  )
}

function About() {

  return (


    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, laudantium tempore! Quis earum, voluptatibus iusto iure, similique quasi nisi deserunt veritatis, facere perferendis accusantium atque vitae et expedita repudiandae ipsum.</p>
  )
}

function Sports() {

  return (

    <div>
      <h1>Sports</h1>
      <ul>
        <li>football</li>
        <li>cricket</li>
        <li>basket ball</li>
      </ul>
    </div>
  )
}


function Pet() {

  return (
    <div>
      <h1>pets</h1>
      <ul>
        <li>dog</li>
        <li>rabbit</li>
        <li>cat</li>
      </ul>
    </div>
  )
}

export default App
