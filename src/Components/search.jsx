import React from 'react';

const SearchComponent = ({ searchId, setSearchId, handleSearch }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        style={{ display: 'block',marginLeft: "40%",width: '20%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button onClick={handleSearch} style={{padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
