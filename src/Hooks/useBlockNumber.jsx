// useBlockNumber.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useBlockNumber = () => {
  const [blockNumber, setBlockNumber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockNumber = async () => {
      try {
        const response = await axios.post(
          'https://arbitrum-mainnet.infura.io/v3/d2a1e46d577c4f2da5378b4bb39fa954',
          {
            jsonrpc: '2.0',
            method: 'eth_blockNumber',
            params: [],
            id: 1,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setBlockNumber(parseInt(response.data.result, 16)); // Convert hex to decimal
      } catch (err) {
        setError(err);
      }
    };

    fetchBlockNumber();
  }, []);

  return { blockNumber, error };
};
