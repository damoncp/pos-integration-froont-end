import './App.css';
import React, { useEffect, useState } from 'react'; 
import GlobalContexts from './contexts/globalContexts';
import { mockProducts } from './constants/mocks';
// components
import Dashboard from './components/Templates/Dashboard/Dashboard';

function App() {
  const [contexts, setContexts] = useState({
    products: []
  });

  useEffect(() => {
    function fetchProducts() {
      setContexts({
        products: mockProducts // later should create new backend route to make API request to get products
      });
    }

    fetchProducts();
  }, []);

  return (
    <GlobalContexts.Provider value={{ contexts, setContexts }}>
      <Dashboard />
    </GlobalContexts.Provider>
  );
}

export default App;
