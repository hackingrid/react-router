import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, NavLink} from 'react-router-dom';
import Topics from './Topics';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* exact={true} 는 주소가 정확히 일치할 때만 라우링이 됨 */}
        {/* <Route path="/" exact={true}><Home/></Route>
        <Route path="/contacts"><Contact/></Route>
        <Route path="/topics"><Topics/></Route> */}

        {/* 첫번재로 발견한 일치하는 라우터를 보여줌 
        루트를 맨 아래에 두거나 exact 속성 사용
        */}
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/contacts"><Contact/></Route>
          <Route path="/topics"><Topics/></Route>
          <Route path="/">404!!!</Route>
        </Switch>
       

        {/* <Route path="/" exact={true} component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/contacts" component={Contact} /> */}


        <ul>
          {/* <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/topics">토픽</Link>
          </li>
          <li>
            <Link to="/contacts">연락</Link>
          </li> */}
          <li>
            <NavLink exact to="/">홈</NavLink>
          </li>
          <li>
            <NavLink exact to="/topics">토픽</NavLink>
          </li>
          <li>
            <NavLink exact to="/contacts">연락</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
