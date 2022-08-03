import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

type getType = {
  userId:number
  id: string
  title: string
  body:string

}

function App() {
  let[get,setGet] = useState<Array<getType>>([])
  console.log(get)
  const getRequestHandler = ()=> {
    setGet([])
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setGet(json))},[]
  )
  return (
    <div className="App">
    <Button nickName={'CleanPage'} callback={getRequestHandler}/>
      <p></p>
      <ul>
      {get.map((el,index)=>{
        return (
                <li key={index}>
                  <span>{el.id} - </span>
                  <span>{el.userId} - </span>
                  <span>{el.title} - </span>
                </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
