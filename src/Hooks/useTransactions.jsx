// useTransactions.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useTransactions = (address) => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/transactions?address=${address}`);
        setTransactions(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [address]);

  return { transactions, error };
};
