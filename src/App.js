import React from 'react'
import "./App.css"
import Header from "./Header"
import ToDoList from "./ToDoList"
// import Components from "./Components" 
import Form from "./Components/Form" 
import { Link, Route } from 'react-router-dom'
import {BrowserRouter, Routes, RLink } from 'react-router-dom' 

function About () {
    return (
        <div>This is About Component</div>
    )
}

function Contact () {
    return (
        <div>This is Contact Component</div>
    )

    }
    function Teams () {
        return(
            <div>This is Teams section <br></br>
            Team Lead: Mehboob Khan<br></br>
            Team Members:<br></br>
            Shreya<br></br>
            Surya<br></br>
            Hita<br></br>
            Sneha<br></br>
            Mubarak<br></br>
            Neha<br></br>
            Mamata<br></br>
            Vidya</div>
        )
    }

function NavBar () {
    return (
        <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/add-student">Add student</Link>
        <Link to="/to-do-list">To-Do List</Link>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/about"  element={<About />}> </Rougigite>
            <Route path="/contact" element={<Contact />}> </Route>
            <Route path="/teams"  element={<Teams />}> </Route>
            <Route path="/add-student"  element={<Form />}> </Route>
            <Route path ="/to-do-list" element={<ToDoList/>}></Route>

        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default App;