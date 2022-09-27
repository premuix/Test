import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';


const Dashboard = () => {

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
          <div className="w-full flex items-center justify-center dashboard-bg text-center text-xl font-bold text-white flex-wrap  " >

            <div className="flex-row gap-2 justify-center justify-items-center " >
              <div className="p-4 text-center ">
                <h1 className="text-6xl text-white mb-2 drop-shadow-md">Welcome to <br />3x Modern Ai</h1>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>

              <div className="flex gap-2 mt-4 justify-center p-4 flex-wrap">
                <div className="rounded-lg shadow-lg bg-blue-500 p-4"><NavLink to="/Login" > Computing Power </NavLink></div>
                <div className="rounded-lg shadow-lg bg-lime-600 p-4"><NavLink to="/Login" >Smarter Devices </NavLink></div>
                <div className="rounded-lg shadow-lg bg-pink-500 p-4"><NavLink to="/Login" >Datafication </NavLink></div>
                <div className="rounded-lg shadow-lg bg-yellow-400 p-4"><NavLink to="/Login" >Artificial Intelligence (AI) </NavLink></div>
              </div>
              <div className="flex gap-x-2 justify-center px-4 flex-wrap">
                <div className="rounded-lg shadow-lg bg-red-600 p-4"><NavLink to="/Login" >Extended Reality </NavLink></div>
                <div className="rounded-lg shadow-lg bg-purple-700 p-4 "><NavLink to="/Login" >Blockchain </NavLink></div>

              </div>
            </div>



          </div>

          
        </div>


      </motion.div>
    </main>
   
  </>
)
};


export default Dashboard; 