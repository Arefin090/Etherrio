import React from 'react';
import { TextField, Container, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchInput }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchInput(inputValue);
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
    </Container>
  );
}

export default SearchBar;







// import React from 'react';
// import { TextField, Container, InputAdornment, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = ({ setSearchInput, print, foo}) => {
//   console.log('foo');
//   const [inputValue, setInputValue] = React.useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSearch = () => {
//     setSearchInput(inputValue);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') 
//     {
//       handleSearch();
//     }
//   };

//   return (
//     <Container 
//       style={{ 
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '50vh'
//       }}
//     >
//       <TextField
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyDown}
//         variant="outlined"
//         style={{
//           width: '50%', 
//           '&:hover .MuiOutlinedInputRoot .MuiOutlinedInputNotchedOutline': {
//             borderColor: 'blue'
//           }
//         }}
//         size="small"
//         placeholder="Enter wallet address or transaction ID(0x1234567890)"
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={handleSearch}>
//                 <SearchIcon />
//               </IconButton>
//             </InputAdornment>
//           )
//         }}
//       />
//     </Container>
//   );
// }

// export default SearchBar;
