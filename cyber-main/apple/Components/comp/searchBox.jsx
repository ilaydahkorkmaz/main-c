import React from "react";
import SearchIcon from '../../src/assets/search.svg'; // İkon ismini daha açıklayıcı hale getirdik

const SearchBox = ({ onSearch }) => { // onSearch prop'u ekledik
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value); // Arama işlemi tetiklendiğinde
        }
    };

    return (
        <div className="search-box" style={styles.searchBox}>
            <img src={SearchIcon} alt="Search icon" style={styles.icon} />
            <input
                type="text"
                placeholder="Search"
                onKeyDown={handleSearch} // Klavye ile arama yapabilmek için onKeyDown olayı eklendi
                style={styles.input}
            />
        </div>
    );
};

const styles = {
    searchBox: {
        display: 'flex',
        alignItems: 'center', 
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
    },
    icon: {
        width: '20px', 
        height: '20px',
        marginRight: '8px', 
    },
    input: {
        border: 'none', 
        outline: 'none', 
        flex: 1, 
        fontSize: '16px', 
    },
};

export default SearchBox;
