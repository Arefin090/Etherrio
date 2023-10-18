// useGasPrice.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGasPrice = () => {
  const [gasPrice, setGasPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        const response = await axios.post(
          'https://arbitrum-mainnet.infura.io/v3/d2a1e46d577c4f2da5378b4bb39fa954',
          {
            jsonrpc: '2.0',
            method: 'eth_gasPrice',
            params: [],
            id: 1,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setGasPrice(parseInt(response.data.result, 16)); // Convert hex to decimal
      } catch (err) {
        setError(err);
      }
    };

    fetchGasPrice();
  }, []);

  return { gasPrice, error };
};
