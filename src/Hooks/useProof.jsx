// useProof.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProof = (address, storageKeys) => {
  const [proof, setProof] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProof = async () => {
      try {
        const response = await axios.post(
          'https://arbitrum-mainnet.infura.io/v3/d2a1e46d577c4f2da5378b4bb39fa954',
          {
            jsonrpc: '2.0',
            method: 'eth_getProof',
            params: [address, storageKeys, 'latest'],
            id: 1,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setProof(response.data.result);
      } catch (err) {
        setError(err);
      }
    };

    if (address && storageKeys) {
      fetchProof();
    }
  }, [address, storageKeys]);

  return { proof, error };
};
