import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Track Crypto currencies in real time through this website. Please
          visit the Dashboard.
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        > <Link to="/dashboard">
        <Button text="Dashboard" outline={false} />
      </Link>
      <a href="https://rajeevranjan-sepia.vercel.app/" target="_blank">
        <Button text="About Me" outline={true} />
      </a>
          
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img 
        src={iphone} 
        className="iphone" 
        initial={{ y:-12}}
        animate = {{ y:12}}
        transition = {{
          type: 'smooth',
          repeatType: "mirror",
          duration:1.5,
          repeat:Infinity,
        }}
        
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
};

export default MainComponent;
