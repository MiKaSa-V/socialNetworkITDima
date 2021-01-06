import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Messages from './Components/Messages/Messages';
import Music from './Components/Music/Music.jsx';
import News from './Components/News/News.jsx';
import Settings from './Components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="AppWrap">
        <Header />
        <NavBar />
        <div className='AppWrapCont'>
            <Route exact path='/Messages' component={Messages}/> {/*component - название компоненты которую нужно отрисовать*/}
            <Route exact path='/Profile' component={Profile}/> {/* path - это путь той компоненты которую нужно отрисовать*/}
            <Route exact path='/Music' component={Music}/> {/* exact - указание что путь точно такой , далее ничего нет */}
            <Route exact path='/News' component={News}/>
            <Route exact path='/Settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
