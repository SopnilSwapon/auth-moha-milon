import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email  = e.target.email.value;
        const password  = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
          console.log(result);
          e.target.reset();
          navigate('/')
        })
        .catch(error => {
          console.error(error.message
          )
        })
        
        
    };
    const handleGoogleLogin = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      })
    }
    return (
        <div className="hero bg-gray-200 p-20">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />  
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} className="btn btn-ghost btn-sm">google Login</button>
        </div>
        <div>
            <p>New ? Please <Link to='/register'><button className="text-green-500 font-bold">Register</button></Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;