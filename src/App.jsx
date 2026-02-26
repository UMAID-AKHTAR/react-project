import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./StudentData/Navbar";
import Student from "./StudentData/Student";
import CreateStudent from "./StudentData/CreateStudent";
import View from "./StudentData/View";
import Edit from "./StudentData/Edit";


function App() {
  return (
  <div>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Student/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/student/createstudent" element={<CreateStudent/>}/>
      <Route path="/student/view/:id" element={<View/>}/>
      <Route path="/student/edit/:id" element={<Edit/>}/>
    </Routes>
  </div>
  );
}

export default App;
