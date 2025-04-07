import React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css";


export default function Paginationn({page , handleChange}) {
  

  return (
    <div className='pagination-component'>
      <Pagination 
      count={10} 
      page={page} 
      onChange={handleChange}
      sx = {{
        color : "var(--white)",
        "& .Mui-selected" : {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important",
        },

        "& .MuiPaginationItem-ellipsis" : {
          border: "0px solid var(--grey) !important",
        },

        "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border: "1px solid var(--grey)",
        }
      }}
      
      />
    </div>
  );
}