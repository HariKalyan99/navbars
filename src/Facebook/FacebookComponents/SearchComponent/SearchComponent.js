import React from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {
  return (
    <IconButton aria-label="search" size="big" sx={{backgroundColor: "rgb(215, 215, 215)"}}>
      <SearchIcon fontSize="inherit" />
    </IconButton>
  )
}

export default SearchComponent