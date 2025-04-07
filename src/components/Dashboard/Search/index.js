import React, { useState } from 'react'
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Search = ({search , onSearchChange , setSearch}) => {

  
  return (
    <div className='search-flex'>
      <SearchRoundedIcon/>
      <input placeholder='Search' type='text' value={search} onChange={ (e) => onSearchChange(e)} />
      <button onClick={ ()=> {setSearch("")}} className='close'><CloseRoundedIcon/></button>
      
    </div>
  )
}

export default Search