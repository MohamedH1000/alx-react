import React from 'react'
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

const App = ({isLoggedIn}) => {
  return (
    <main>
      <>
        {!isLoggedIn ?
        <>
          <Header />
          <Login />
        </>
        :
        <>
          <Header />
          <CourseList />
        </>
        }
        <Notifications />
      </>
      <Footer />
    </main>   
  );
}

App.propTypes = {
  isLoggedIn : PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn : false,
}

export default App;