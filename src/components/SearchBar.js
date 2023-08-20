import React from 'react';
import { TextField, Container, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
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
                variant="outlined"
                style={{
                    width: '50%', 
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'blue'
                    }
                }}
                size="small"
                placeholder="Enter wallet address or transaction ID"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
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
