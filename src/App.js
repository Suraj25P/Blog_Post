import React ,{Component} from 'react';
import NavBar from './Components/NavBar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Posts from './Components/Posts'

class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/:post_id" component={Posts}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
