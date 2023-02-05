import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';

interface IProps {
  user: any,
  setUser: any,

}

interface IState {
  count: number
}

class Nav extends Component<IProps, IState>
{
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 10
    }
  }
  private async logout() {
    const response = await fetch('http://localhost:8100/api/logout', {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      credentials: 'include',

    });
    this.props.setUser({ name: 'abc' })
    return <Navigate to="/login"></Navigate>;
  }

  render(): React.ReactNode {
    return (
      <nav className="navbar navbar-expand-lg navbar-light  bg-top-nav">
        <div className="container-fluid">
          {this.menu()}
        </div>
      </nav>
    );
  }

  menu(): React.ReactNode {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li><Link to="/" className='nave-link'> Home </Link></li>
          <li><Link to="/login" className='nave-link'> Login </Link></li>
          <li><Link to="/register" className='nave-link'> Register </Link></li>
        </ul>
    );
  }

}

export default Nav;