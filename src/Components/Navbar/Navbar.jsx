import './navbar.scss'
import { FaFacebook,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <span>Dhananjoy Ghosh</span>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100070667795660&mibextid=ZbWKwL"><FaFacebook size={20}/></a>
                <a href="https://www.instagram.com/dhananjoy_06?igsh=cGE1Zm1xd3c2Y3Yy"><FaInstagram size={20}/></a>
                <a href="https://www.linkedin.com/in/dhananjoy-ghosh-a020ba246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={20}/></a>
                <a href="https://github.com/dhananjoyghosh06"><FaGithub size={20} /></a>

            </div>
        </div>
    </div>
  );
};
export default Navbar;




