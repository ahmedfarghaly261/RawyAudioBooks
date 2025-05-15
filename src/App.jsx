import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import UserHome from './pages/User_Home/Home'
import Login from './auth/login/login'
import Register from './auth/registration/register'
import Cards from './components/card/card'
import BookPage from './pages/bookPage/Bookpage'
import AdminPage from './pages/admin/admin'
import UserProfile from './pages/UserProfile/userProfile'
import Categories from './pages/categories/categories'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/book" element={<BookPage/>} />
        <Route path="/AdminPage" element={<AdminPage/>} />
        <Route path="/UserPage" element={<UserProfile/>} />
        <Route path="/Categories" element={<Categories/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
