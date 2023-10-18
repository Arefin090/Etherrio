import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Balance from "./Balance";
import TransactionHistory from "./TransactionTable";
import ForceGraph from './forcegraph/ForceGraph';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const transformDataToGraph = (apiData) => {
  const nodes = apiData.map(tx => ({ 
      id: tx.from, 
      data: { label: tx.from }, 
      position: { x: Math.random() * 500, y: Math.random() * 500 }
  }));
  const edges = apiData.map(tx => ({ 
      id: `${tx.from}-${tx.to}`, 
      source: tx.from, 
      target: tx.to, 
      animated: true 
  }));

  return [...nodes, ...edges];
};

export default function BalanceAndTransactionTabs({searchInput}) {
  const [value, setValue] = React.useState(0);
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/transactions?address=${searchInput}`);
        const data = await response.json();
        const graphData = transformDataToGraph(data); // Transform the data
            setTransactionData(graphData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
  

    if (searchInput) {
      fetchTransactionData();
    }
  }, [searchInput]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        marginBottom: "30vh",
      }}
    >
      <Box width={'100%'} mb={4} px={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Transaction Map" {...a11yProps(0)} />
          <Tab label="Wallet" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {value === 0 ? <ForceGraph data={transactionData} address={searchInput}/> : <><Balance address={searchInput} /> <TransactionHistory searchInput={searchInput} /></>}
    </Box>
  );
}





// import React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Balance from "./Balance";
// import TransactionHistory from "./TransactionTable";
// import ForceGraph from './forcegraph/ForceGraph';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// export default function BalanceAndTransactionTabs({searchInput}) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{
//         bgcolor: "background.paper",
//         width: "100%",
//         marginBottom: "30vh",
//       }}
//     >
//       <Box width={'100%'} mb={4} px={12}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Transaction Map" {...a11yProps(0)} />
//           <Tab label="Wallet" {...a11yProps(1)} />
//         </Tabs>
//       </Box>
//       {value === 0 ? <ForceGraph/> : <><Balance address={searchInput} /> <TransactionHistory searchInput={searchInput} /></>}
//     </Box>
//   );
// }