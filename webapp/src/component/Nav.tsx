import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
interface IProps {
  user: any,
  setUser: any,
}

interface IState {
  active: string
}

class Nav extends Component<IProps, IState>
{
  constructor(props: IProps) {
    super(props);
    this.state = {
      active: 'home'
    }
  }

  private async logout() {
    const response = await fetch('http://localhost:8100/api/logout', {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      credentials: 'include',

    });
    this.props.setUser({ user: undefined })
    return <Navigate to="/login"></Navigate>;
  }

  render(): React.ReactNode {
    return (
      <nav id="navbar" className="nav-menu navbar">
        {this.menu()}
      </nav>

    );
  }

  handleClick(active: string) {

    // Changing state
    this.setState({ active: active })
  }

  getClass(item: string): string {

    let status = '';
    if (this.state.active === item) {
      console.log('xxx');
      status = 'active';
    }

    return 'nav-link scrollto  ' + status;
  }

  menu(): React.ReactNode {
    return (

      <ul >
        <li className="nav-item"><Link to="/" className={this.getClass('home')} onClick={(e) => this.handleClick('home')}><i className="bx bx-home"></i>  <span>Home</span>  </Link></li>
        <li className="nav-item"><Link to="/about" className={this.getClass('about')} onClick={(e) => this.handleClick('about')} > <i className="bx bx-user"></i><span>About</span></Link></li>
        <li className="nav-item"><Link to="/login" className={this.getClass('login')} onClick={(e) => this.handleClick('login')}>  <i className="bx bx-lock-open-alt"></i><span>Login</span></Link></li>
        <li className="nav-item"><Link to="/register" className={this.getClass('register')} onClick={(e) => this.handleClick('register')}><i className="bx bx-child"></i><span>Register</span></Link></li>
      </ul>


    );
  }

}

export default Nav;