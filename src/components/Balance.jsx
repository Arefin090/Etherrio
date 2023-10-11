// Balance.jsx
import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useBalance } from './useBalance'; // Import the custom hook

export default function Overview({ address }) { // Add address prop
    const [expanded, setExpanded] = useState(false);
    const { balance, error } = useBalance(address); // Use the custom hook

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // Handle loading and error states
    if (error) {
        return (
            <p>Error fetching balance: {error.message}</p>
        );
    }

    if (balance === null) {
        return (
            <p>Loading...</p>
        );
    }

    // Convert Wei to ETH and format the balance
    const balanceInEth = (balance / 1e18).toFixed(7);

    return (
        <div style={{ marginTop: '20px', marginBottom: '50px', maxWidth: '600px', margin: 'auto' }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Current Balance
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {balanceInEth} ETH
                    </Typography>
                    <Button 
                        startIcon={<ExpandMoreIcon />} 
                        onClick={handleExpandClick}
                        style={{ marginTop: '10px' }}
                    >
                        More Info
                    </Button>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Wallet Address: {address}
                            </Typography>
                            {/* Other details remain the same */}
                            <Typography variant="body2" color="text.secondary">
                                Last Transaction: 2023-08-23
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                First Transaction: 2023-01-01
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Name Tag: builder
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardContent>
            </Card>
        </div>
    );
}
// /* Balance list for summary data of searched wallet */ 

// import React, { useState } from 'react';
// import { Button, Card, CardContent, Typography, Collapse } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // Overview component
// export default function Overview() {
//     const [expanded, setExpanded] = useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     // balance of wallet organized via a list. Data is hardcoded for now.
//     return (
//         <div style={{ marginTop: '20px', marginBottom: '50px', maxWidth: '600px', margin: 'auto' }}>
//             <Card variant="outlined">
//                 <CardContent>
//                     <Typography variant="h5" component="div">
//                         Current Balance
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         23.1232345 ETH ($1235.23)
//                     </Typography>
//                     <Button 
//                         startIcon={<ExpandMoreIcon />} 
//                         onClick={handleExpandClick}
//                         style={{ marginTop: '10px' }}
//                     >
//                         More Info
//                     </Button>
//                     <Collapse in={expanded} timeout="auto" unmountOnExit>
//                         <CardContent>
//                             <Typography variant="body2" color="text.secondary">
//                                 Wallet Address: 0x1234567890123456789012345678901234567890
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Last Transaction: 2023-08-23
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 First Transaction: 2023-01-01
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Name Tag: builder
//                             </Typography>
//                         </CardContent>
//                     </Collapse>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }
