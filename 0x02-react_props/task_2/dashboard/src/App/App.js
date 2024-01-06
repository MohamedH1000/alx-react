import React from 'react'
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

const App = () => {
  return (
    <main>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </main>   
  )
}

export default App;