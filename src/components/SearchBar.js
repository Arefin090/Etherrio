import React from 'react';
import { TextField, Container, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ handleSearch }) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(inputValue);
        }
    };

    return (
        <Container 
            style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh'
            }}
        >
            <TextField
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                variant="outlined"
                style={{
                    width: '50%', 
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'blue'
                    }
                }}
                size="small"
                placeholder="Enter wallet address or transaction ID(0x1234567890)"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => handleSearch(inputValue)}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Container>
    );
}

export default SearchBar;
