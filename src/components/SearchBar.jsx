import { useContext, useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../MainContext'

function SearchBar(props) {
    const { search, setSearch } = useContext(MainContext)
    return (
        <div className="search-bar">
            <div className="icon">
                <GrSearch />
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Brands' />
        </div>
    )
}
export default SearchBar