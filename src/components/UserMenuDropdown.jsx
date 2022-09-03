import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, Link} from "react-router-dom"

const UserMenuDropdown = ({toggle}) => {


    const navigate = useNavigate()
    console.log(window.location)
    const handleAuth = () => {
          navigate("/")
    }
  return (
    <AnimatePresence>
      {toggle && ( //animationpresence debe ser el padre de lo q queremos renderizar segun un state
        <motion.ul
          className="rounded bg-white z-20  p-2 text-right absolute right-0 left-0 shadow-shadow1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}

        >
          <li className="my-2">
            <a href="">My orders</a>
          </li>
          <li className="my-2">
            <Link to="/userdetails">My account</Link>
          </li>
          <li className="my-2">
            <button className="text-p2" onClick={() => handleAuth()}>
              Sign out
            </button>
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default UserMenuDropdown;
