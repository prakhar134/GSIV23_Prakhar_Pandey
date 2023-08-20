import React from 'react';
import "./Header.css"
import {Link} from 'react-router-dom'

const Header = ({getSearchMovies, searchText, setSearchText, showInput=true}) => {
    function handleSerach(e){
      if(e.key !== "Enter"){
        return;
      }
      getSearchMovies();
    }
    
  return (
    <div className='header_container'>
      {showInput ? (
      <div className='searchBox'>
        <input className='input' type='text' value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          onKeyUp={(e)=> handleSerach(e)}
          placeholder='Search'/>
      </div>
      ) : (
        <div className='header_content'>
          <p className='header_title'>Movie Details</p>
          <Link to={'/list'}>Home</Link>
        </div>
      )}
    </div>
  )
}

export default Header