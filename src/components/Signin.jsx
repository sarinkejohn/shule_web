import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
 



const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { signIn } = useAuth();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        setError('')
        setLoading(true)
      await signIn(email, password)
      navigate('/teacherpage')
    } catch (e) {
        setError("Failed to log in")
      
    }
  };

  return (
  <div className="relative flex flex-col justify-center  min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md border-2 shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
             Sign in
          </h1>
          {error && <p className="text-orange-800">{error}</p>}
          <form  onSubmit={handleSubmit} className="mt-6">
              <div className="mb-2">
                  <label
                      for="email"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Email
                  </label>
                  <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <div className="mb-2">
                  <label
                      for="password"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Password
                  </label>
                  <input onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <span
                  
                  className="text-xs text-purple-600 hover:underline"
              > 
              <Link to='/forgetpassword' className='underline'>
                  Forget Password?
                  </Link>
              </span>
              <div className="mt-6">
                  <button  disabled={loading} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                      Login
                  </button>
              </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
                <Link disabled={loading} to='/signup' className='underline'>
            Sign up.
            </Link>
          </p>
      </div>
  </div>


  );
};

export default Signin;
