import './App.css';
// import ClassComponent from './components/class-component/class-component'
// import FunctionComponent from './components/function-component/function-component'
import HomePage from './pages/home-page/home-page'
import LoginPage from './pages/login-page/login-page'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import NoPage from './pages/404/404'
// children和component是互斥的，而且children的优先级更高，并且children,和location无关;
// children > component > render
function App() {
  return (
    <div className="App">
      {/* <HomePage />
      <LoginPage /> */}
      <Router>
        <Link to="/">Home页</Link> 
        <Link to="/login">登录页</Link>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" 
            component={LoginPage} 
            // children={()=>{
            //   return (
            //     <div>
            //       children
            //     </div>
            //   )
            // }} 
            render={()=>{
              return (
                <div>
                  render
                </div>
              )
            }}
            
          />
          <Route component={NoPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
