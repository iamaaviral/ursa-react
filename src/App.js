import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SideNav from './SideNav'

function App() {
  // let name = "aviral"
  // const name = useState("aviral") 
  const [name, setName] = useState("aviral")
  const [age, setAge] = useState(16)

  function changeName() {
   let newName = name === "Sameer" ? "aviral" : "Sameer";
   
    setName(newName)
    setAge(age + 1)
  }

  return (
    <div className="App">
      {/* <Header /> */}
      {/* {Header()} */}
      <h1>my name is {name} and my age is {age}</h1>
      <button onClick={changeName}>Change Name</button>
      <SideNav age={age} name={name}/>
    </div>
  );
}



// function VirtualDOM() {
//   let name1 = "aviral"

//   const changeName = () => {
//     console.log(name1);
//     name1 = "Sameer"
//     console.log(name1)
//   }

//   return (
//     <div className="App">
//       <button onClick={changeName}>Change Name</button>
//       <h1>{name1}</h1>
//     </div>
//   );
// }


//virtual dom
//state value (is a react variable)


//real dom pr variable called as name1


//Virtual dom now =====> 
// virtual dom thought nothing has changed ===> 
// to it didn't change virtual dom ==> 
// hence my real dom also didnt change





export default App;
// classes  ===> 2016