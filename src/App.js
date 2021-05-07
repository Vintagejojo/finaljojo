import Header from './components/Header';
import Heroimage from './components/Heroimage';
import Dummy from './components/Dummy';
import Main from './components/Main';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      {/* <Heroimage/> */}
      <Route path='/' exact component={Heroimage}/>
          {/* This is dummy code plz delete later VV */}
      <Route path='/dummy' component={Dummy}/> 
      </Router>
      <Main/>
    </div>
  );
}

export default App;
