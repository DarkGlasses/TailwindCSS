import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header/>
          
          <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Course' element={<Course/>} />
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/NotFound' element={<NotFound/>}/>
          </Routes>
          </main>
          <Footer/>
        </div>
        
      </Router>

    </>
  )
}

export default App