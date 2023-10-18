import React from 'react';
import { TextField, Container, InputAdornment, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchInput, setIsValidAddress}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(''); // State for error message

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorMessage(''); // Clear any previous error messages
  };

  const handleSearch = async () => {
    // Clear any previous error messages
    setErrorMessage('');

    try {
      const response = await fetch(`http://localhost:5001/api/transactions?address=${inputValue}`);
      const data = await response.json();

      if (data && data.length > 0) {
        setSearchInput(inputValue);
        setIsValidAddress(true);
      } else {
        setIsValidAddress(false);
        setErrorMessage('Address not found in the database. Please enter a valid address.');
      }
    } catch (error) {
      setErrorMessage('Error fetching data. Please try again.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh'
      }}
    >
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
        style={{
          width: '50%', 
          '&:hover .MuiOutlinedInputRoot .MuiOutlinedInputNotchedOutline': {
            borderColor: 'blue'
          }
        }}
        size="small"
        placeholder="Enter Wallet Address" 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {errorMessage && <Typography color="error" style={{ marginTop: '10px' }}>{errorMessage}</Typography>}
    </Container>
  );
}

export default SearchBar;