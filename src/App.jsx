import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import EventPage from './components/EventPage'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/events/:id" element={ <EventPage /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
