import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';

interface IProps {
}

interface IUser {
  name: string | undefined
}

interface IState {
  user?: IUser;
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      user: {
        name: undefined
      }
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user: IUser) {
    this.setState({
      user: user
    });
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav user={this.state.user} setUser={this.setUser}></Nav>
          <Routes>
             <Route path='/' element={<Home/>} ></Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/register' element={<Register></Register>}></Route>
          </Routes>
        </BrowserRouter>
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

      </div>
    );
  }

}


export default App;
