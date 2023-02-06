
const Login = () => {
        return (
            <section id="contact" className="contact">
              <div className="container">
                <div className="section-title">
                  <h2>Login</h2>
                </div>
                <div className="row" data-aos="fade-in">
                  <div className="col-lg-2 d-flex align-items-stretch">
                  </div>
                  <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                      
                 
                      <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" className="form-control" name="subject" id="subject" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input type="password" className="form-control" name="subject" id="subject" required />
                      </div>
                      
                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="text-center"><button type="submit">Register</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
    );
}

export default Login;