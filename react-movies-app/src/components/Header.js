import React, { useState } from 'react'

const Header = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <div><input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}/></div>
  )
}

export default Header