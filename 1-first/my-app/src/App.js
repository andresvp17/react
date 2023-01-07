import React from 'react'
import ListOfGifs from './components/ListOfGifs/listOfGifs'
import Home from './components/pages/home/Home'
import Detail from './components/pages/Detail/Detail'
import Context from './context/GifsContext'
import {  Link, Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'
import './App.css';

function App() {
  return (
    <Context.Provider value={{name: 'Andres', lastname: 'Villsmil'}}>
    <div className="App">
      <section className='App-main'>
        <div className='routes'>
          <Link to='/'>
            <img className='logo' src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/56/7300819056_33dee2e5-b61c-45e7-b88f-a315cf0ffb12.png?cb=1652895401' alt='Page Logo'/>
          </Link>
          <GifsContextProvider>
            <Route 
              path='/search/:keyword'
              component={ListOfGifs} />
            <Route 
              component={Home}
              path='/' />
            <Route 
              component={Detail}
              path='/gif/:id'/>
            <Route 
              component={() => <h1>Sorry. Error 404 ;(</h1>}
              path="/404"
            />
          </GifsContextProvider>
        </div>
      </section>
    </div>
    </Context.Provider>
  );
}

export default App;