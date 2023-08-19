import React from 'react';
import "./Header.css"

const Header = ({getSearchMovies, searchText, setSearchText, removeSearchMovies}) => {
    function handleSerach(e){
      if(e.key !== "Enter"){
        return;
      }
      getSearchMovies();
    }
    
  return (
    <div className='header_container'>
      <div className='searchBox'>
        <input className='input' type='text' value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          onKeyUp={(e)=> handleSerach(e)}
          placeholder='Search'/>
      </div>
      <div>Home</div>
    </div>
  )
}

export default Header