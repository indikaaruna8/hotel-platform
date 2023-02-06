import React, { Component } from 'react';
import profileimg from './assets/img/logo512x512.png';
import './App.scss';
import Nav from './component/Nav';
import { Link,BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import About from './page/About';

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
 appendScript  (scriptToAppend : any )  {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount () {
    this.appendScript("assets/vendor/purecounter/purecounter_vanilla.js");
    this.appendScript("assets/vendor/aos/aos.js");
    // this.appendScript("assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
    this.appendScript("assets/vendor/glightbox/js/glightbox.min.js");
    this.appendScript("assets/vendor/isotope-layout/isotope.pkgd.min.js");
    this.appendScript("assets/vendor/swiper/swiper-bundle.min.js");
    this.appendScript("assets/vendor/typed.js/typed.min.js");
    this.appendScript("assets/vendor/waypoints/noframework.waypoints.js");
    this.appendScript("assets/vendor/php-email-form/validate.js");
    this.appendScript("assets/js/main.js");
  }

  render(): React.ReactNode {
    return (
      <div className="App">

        <BrowserRouter>
         <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
          <header id="header">
            <div className="profile">
              <img src={profileimg} alt="" className="img-fluid rounded-circle" />
              <h1 className="text-light"><Link to="/">Hotel In</Link></h1>
              <div className="social-links mt-3 text-center">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
              <Nav user={this.state.user} setUser={this.setUser}></Nav>

            </div>
          </header>
          <main id="main">
              <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
              </Routes>
          </main>
        </BrowserRouter>
      </div>
    );
  }

}


export default App;
