import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='about' element={<About />}/>
        <Route path='book' element={<BookList />} />
        <Route path='/book/:id' element={<BookDetails />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
