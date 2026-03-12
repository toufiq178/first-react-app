
import './App.css'
import ToDo from './ToDo'
import Actors from './Actors';
import Singer from './Singers';
import Sports from './Sports';

function App() {

  // const tasks = [
  //   { task: "Wake up early", isDone: true },
  //   { task: "Brush teeth", isDone: false },
  //   { task: "Take a shower", isDone: true },
  //   { task: "Eat breakfast", isDone: false },
  //   { task: "Study JavaScript", isDone: true },
  //   { task: "Practice coding", isDone: false },
  //   { task: "Watch programming tutorial", isDone: false },
  //   { task: "Build a small project", isDone: false },
  //   { task: "Read a programming book", isDone: false },
  //   { task: "Exercise for 30 minutes", isDone: true },
  //   { task: "Update GitHub project", isDone: false },
  //   { task: "Buy groceries", isDone: true },
  //   { task: "Plan tomorrow's tasks", isDone: false },
  //   { task: "Eat dinner", isDone: false },
  //   { task: "Go to sleep", isDone: true }
  // ];

  // const actors = ["Shakib Khan","Chanchal Chowdhury","Dev","Jeet","Salman Khan"];

  // const singers = [
  //   { id: 1, name: "Arijit Singh", age: 37, country: "India" },
  //   { id: 2, name: "Atif Aslam", age: 41, country: "Pakistan" },
  //   { id: 3, name: "Shreya Ghoshal", age: 40, country: "India" },
  //   { id: 4, name: "Tahsan Khan", age: 44, country: "Bangladesh" },
  //   { id: 5, name: "James", age: 59, country: "Bangladesh" }
  // ];

  const sports = [
    {
      id: 1,
      name: "Football",
      players: 11,
      country: "Brazil",
      popularPlayer: "Lionel Messi"
    },
    {
      id: 2,
      name: "Cricket",
      players: 11,
      country: "India",
      popularPlayer: "Virat Kohli"
    },
    {
      id: 3,
      name: "Basketball",
      players: null,
      country: "USA",
      popularPlayer: "LeBron James"
    },
    {
      id: 4,
      name: "Tennis",
      players: 2,
      country: "Switzerland",
      popularPlayer: "Roger Federer"
    },
    {
      id: 5,
      name: "",
      players: 2,
      country: "China",
      popularPlayer: "Lin Dan"
    }
  ];




  return (
    <>

      <h1>React</h1>




      {

        sports.map(sport => <Sports key={sport.id} sport = {sport}></Sports>)
      }








      {/* {

          singers.map(singer => <Singer singer={singer}></Singer>)
        } */}


      {/* {

          actors.map((actor , index) => <Actors key={index} actor={actor}></Actors>)
        } */}

      {/* <ul>

        {tasks.map((t, index) => (

          <ToDo key={index} task ={t.task} isDone = {t.isDone} />))}

      </ul> */}



      {/* <ToDo task = "Watch programming tutorial" isDone = {true}></ToDo>
      <ToDo task = "Build a small project" isDone = {false}></ToDo>
      <ToDo task = "Practice coding" isDone = {true}></ToDo>
      <ToDo task = "Eat dinner" isDone = {false}></ToDo>
      <ToDo task = "Buy groceries" isDone = {false}></ToDo>
      <ToDo task = "Wake up early" isDone = {true}></ToDo> */}

      {/* <Book name = "Atomic Habits" category = "Self Development" createDate = "2020"></Book>
      <Book name = "Clean Code" category = "Programming" createDate = "2008"></Book>
      <Book name = "The Alchemist" category = "Novel" createDate = "1988"></Book> */}


      {/* <Cricketer name = "Sakib al hasan" runs = "8000" wicket = "500"></Cricketer>
      <Cricketer name = "Tamim iqbal " runs = "12000" ></Cricketer>
      <Cricketer name = "Mustafizur Rahman"  wicket = "600"></Cricketer>
      <Cricketer  wicket = "100" runs= "2000"></Cricketer> */}


    </>
  )
}



function Book({ name, category, createDate }) {

  return (

    <div className='device-box'>

      <h1>Book</h1>

      <p>Name :{name} </p>
      <p>Category: {category} </p>
      <p>Create date : {createDate}</p>
    </div>
  )
}

function Cricketer({ name = "guest", runs = 0, wicket = 0 }) {

  return (

    <div className='device-box'>

      <p>Name : {name}</p>
      <p>Runs : {runs}</p>
      <p>Wicket : {wicket}</p>
    </div>
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

// function Sports() {

//   return (

//     <div>
//       <h1>Sports</h1>
//       <ul>
//         <li>football</li>
//         <li>cricket</li>
//         <li>basket ball</li>
//       </ul>
//     </div>
//   )
// }


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
