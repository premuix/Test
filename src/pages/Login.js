import React, {useState} from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye  } from "react-icons/ai";


const Login = () => {
    const [open, setOpen] = useState(false)

    // handle toggle 
    const toggle = () =>{
        setOpen(!open)
    }

    return (

  <>

<main className="page-wrapper">
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="overflow-hidden w-full flex leading-normal h-screen">
          <div className="lg:w-8/12 flex items-center justify-center side-bg text-center text-xl font-bold text-white flex-wrap  " >

            <div className="flex-row gap-2 justify-center justify-items-center " >
              <div className="p-4 text-center ">
                <h1 className="text-4xl text-white mb-2 drop-shadow-md">Connect to the world largest <br />upcoming modern technologies</h1>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>

              <div className="flex gap-2 mt-4 justify-center p-4 flex-wrap">
                <div className="rounded-lg shadow-lg bg-blue-500 p-4">Computing Power </div>
                <div className="rounded-lg shadow-lg bg-lime-600 p-4">Smarter Devices </div>
                <div className="rounded-lg shadow-lg bg-pink-500 p-4">Datafication </div>
                <div className="rounded-lg shadow-lg bg-yellow-400 p-4">Artificial Intelligence (AI)</div>
              </div>
              <div className="flex gap-x-2 justify-center px-4 flex-wrap">
                <div className="rounded-lg shadow-lg bg-red-600 p-4">Extended Reality </div>
                <div className="rounded-lg shadow-lg bg-purple-700 p-4 ">Blockchain</div>

              </div>
            </div>



          </div>


          <div className="text-center lg:w-4/12 flex items-center justify-center p-4">
            <div className="flex min-h-full  w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-8">
                <div className="logo">
                  <img  src="/images/logo.svg" alt="Your Company" />
                  <h2 className="mt-6 text-center text-xl  tracking-tight text-gray-900">
                    Login to your account
                  </h2>
                  <p className="text-center text-sm text-gray-500">
                    <a href="/" className="font-normal text-gray-500 hover:text-yellow-400">
                      start your 14-day free trial
                    </a>
                  </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 mb-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="password" className="sr-only">
                      Password
                      </label>
                      <input
                        id="Password"
                        name="Password"
                        type={(open === false)? 'password' :'text'}
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                        placeholder="Password"
                      />
                      
                      <div className="absolute top-5 right-3.5 z-10">
                      {
                          (open === false)? < AiFillEyeInvisible onClick={toggle}/> : < AiFillEye onClick={toggle}/>

                      }
                  
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                  <NavLink to='/Dashboard'>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-400 py-3 px-4 text-2xl font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    >
                     Login
                    </button>
                    </NavLink>
                  </div>
                  <p>
                      No Account ?
                      <NavLink to="/SignUp" className="px-2 font-medium text-indigo-600 hover:text-indigo-500">SignUp Now</NavLink>
                      
                  </p>
                  <div class="flex justify-center justify-items-center gap-1">
                  
    <button type="button" class="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50">
      <svg class="mr-2 -ml-1 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
      Google
    </button>
    <button type="button" class="dark:focus:ring-[#3b5998]/55 mr-2 mb-2 inline-flex items-center rounded-lg bg-[#3b5998] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50">
      <svg class="mr-2 -ml-1 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
      Facebook
    </button>
    
  </div>
                </form>
              </div>
            </div>
            
          </div>
          
        </div>


      </motion.div>
    </main>
   
  </>
)
};


export default Login; 