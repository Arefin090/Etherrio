// Balance.jsx
import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Collapse, Alert } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useBalance } from './useBalance'; 
//import { useProof } from './useProof'; 
import { useGasPrice } from '../Hooks/useGasPrice'; 
import { useBlockNumber } from '../Hooks/useBlockNumber'; 

export default function Overview({ address }) { 
    const [expanded, setExpanded] = useState(false);
    const { balance, error: balanceError } = useBalance(address); 
    //const { proof, error: proofError } = useProof(address); 
    const { gasPrice, error: gasPriceError } = useGasPrice(); 
    const { blockNumber, error: blockError } = useBlockNumber(); 

    console.log('Balance:', balance);
    //console.log('Proof:', proof);
    console.log('Gas Price:', gasPrice);
    console.log('Block Number:', blockNumber);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const renderError = (errorMessage) => (
        <Alert severity="error" style={{ marginBottom: '15px' }}>
            {errorMessage}
            {console.log(errorMessage)}
        </Alert>
    );

    return (
        <div style={{ marginTop: '20px', marginBottom: '50px', maxWidth: '600px', margin: 'auto' }}>
            <Card variant="outlined">
                <CardContent>
                    {balanceError && renderError(`Error fetching balance: ${balanceError.message}`)}
                    {/* {proofError && renderError(`Error fetching proof: ${proofError.message}`)} */}
                    {gasPriceError && renderError(`Error fetching gas price: ${gasPriceError.message}`)}
                    {blockError && renderError(`Error fetching block number: ${blockError.message}`)}

                    <Typography variant="h5" component="div">
                        Current Balance
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {balance === null ? 'Loading...' : (balance / 1e18).toFixed(7) + ' ETH'}
                    </Typography>
                    <Button 
                        startIcon={<ExpandMoreIcon />} 
                        onClick={handleExpandClick}
                        style={{ marginTop: '10px' }}
                        disabled={balance === null  || gasPrice === null || blockNumber === null}
                    >
                        More Info
                    </Button>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Wallet Address: {address}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Balance Proof: {proof ? JSON.stringify(proof) : 'Loading...'}
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                Current Gas Price: {gasPrice ? gasPrice + ' Gwei' : 'Loading...'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Current Block Number: {blockNumber !== null ? blockNumber : 'Loading...'}
                            </Typography>
                            {/* Other details remain the same */}
                            {/* <Typography variant="body2" color="text.secondary">
                                Last Transaction: 2023-08-23
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                First Transaction: 2023-01-01
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Name Tag: builder
                            </Typography> */}
                        </CardContent>
                    </Collapse>
                </CardContent>
            </Card>
        </div>
    );
}