import { useState } from 'react'
import './App.css'
import LoginPage from './components/loginPage'
import MainPage from './components/mainPage'

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  return (
    <>
    {isUserLoggedIn ?  <MainPage setIsUserLoggedIn={setIsUserLoggedIn}/> : <LoginPage setIsUserLoggedIn={setIsUserLoggedIn}/>} 
    </>
  )
}

export default App