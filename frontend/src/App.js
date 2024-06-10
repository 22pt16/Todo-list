//App.js

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import './css/App.css';


function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
