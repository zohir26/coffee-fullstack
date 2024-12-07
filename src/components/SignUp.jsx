import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {
  
  const {createUser} = useContext(AuthContext);
  
  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newSignUp= {name,email,password}
    console.log(newSignUp)

    createUser(email,password)
    .then(result=>{
      console.log(result.user)

      // save new user info into database
      const newUser= {name,email}
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log("user created in database",data)
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
   }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col l">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email"
                placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;