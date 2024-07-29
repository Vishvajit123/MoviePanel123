import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './pages/MovieDetail/MovieDetail';



function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="movie/:id" element={<Movie/>}></Route>
            <Route path="movies/:type" element={<MovieList/>}></Route>
            <Route path="movie" element={<h2>Error Page</h2>}></Route>
          </Routes>
        </Router>
      </div>
      Hello
    </>
  )
}

export default App
