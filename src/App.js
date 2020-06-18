import React , {createContext} from 'react';
import './App.css';
import Counter from "./Counter";
import CounterHooks from "./HooksComponents/CounterHooks";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Header from "./Header";
export const MyContext = createContext("Branding");

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <MyContext.Provider 
      value={{color : 'blue',
          fontsize : "30px",
          items :[{id:1,title: 'Post 1'},{id:2,title:'Post 2'},{id:3,title:'Post 3'}],
          marginRight : '1%'
          }}>
            {/* <Counter/>
            <div>
              <CounterHooks/>
           </div> */}
            <Header/>
           <h1>Welcome to React App</h1>
           <br/>
           <Route exact path = "/" component={Counter}/>
           <Route exact path="/counter" component={CounterHooks}/>
      </MyContext.Provider>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
