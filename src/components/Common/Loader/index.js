import React from 'react';
import "./styles.css";
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div  className='loader-container'>
      <CircularProgress/>
    </div>
  )
}

export default Loader