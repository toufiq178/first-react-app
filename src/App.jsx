
import './App.css'

function App() {


  return (
    <>

      <h1>Vite + React</h1>
      <Paragraph></Paragraph>
      <About></About>
      <Sports></Sports>
      <Pet></Pet>

    </>
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
