import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch} from "react-redux";
import {useNavigate, Link} from "react-router-dom"
import { logoutFail, logoutStart, logoutSuccess } from "../actions/authActions";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const UserMenuDropdown = ({toggle}) => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleAuth = () => {
      dispatch(logoutStart()); 
      signOut(auth)
        .then(() => dispatch(logoutSuccess()))
        .then ( () => navigate("/login"))
        .catch((error) => dispatch(logoutFail(error.message)));
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
