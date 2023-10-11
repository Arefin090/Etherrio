// useBalance.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useBalance = (address) => {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.post(
          'https://mainnet.infura.io/v3/d2a1e46d577c4f2da5378b4bb39fa954',
          {
            jsonrpc: '2.0',
            method: 'eth_getBalance',
            params: [address, 'latest'],
            id: 1,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setBalance(parseInt(response.data.result, 16)); // Convert hex to decimal
      } catch (err) {
        setError(err);
      }
    };

    if (address) {
      fetchBalance();
    }
  }, [address]);

  return { balance, error };
};
