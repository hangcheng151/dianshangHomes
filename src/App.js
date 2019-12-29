import './style.less';
import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Shop from './pages/Shop'
import My from './pages/My'
 class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Switch>
            <Route path="/home" render={()=><Home/>} />
            <Route path="/shop" render={()=><Shop/>} />
            <Route path="/my"  render={()=><My/>}/>
            <Route path="/" render={()=><Home/>}>
              <Redirect to="/home"></Redirect>
            </Route>
          </Switch>
        </section>
        <Footer/>
      </div>
    )
  }
}


export default App;
