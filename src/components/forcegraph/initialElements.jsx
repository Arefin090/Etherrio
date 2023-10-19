



import styles from './styles.module.css';

// Placeholder for initial nodes and edges
export const initialNodes = [];
export const initialEdges = [];

// Fetch data from the API and populate the nodes and edges
export const fetchGraphData = async (address) => {
    try {
        const response = await fetch(`http://localhost:5001/api/transactions?address=${address}`);
        const transactions = await response.json();

        const nodes = [];
        const edges = [];
        const radius =  250;
        const center = {x: 500, y:500};

        // Create a set to avoid duplicate nodes
        const nodeSet = new Set();
        console.log(transactions)
        transactions.forEach((transaction, index) => {
            // Add from_address and to_address to nodes if they don't exist
            const angle = (index/(transactions.length || 1) ) * 2 * Math.PI;

            console.log(transaction.from_address)
            if (!nodeSet.has(transaction.from_address)) {
                console.log(transaction.from_address)
                nodes.push({
                    id: transaction.from_address,
                    data: { label: `${transaction.from_address.slice(0, 6)}...${transaction.from_address.slice(-4)}` },

                    position:
                    { 
                        x: center.x + radius * Math.cos(angle),
                        y: center.y + radius * Math.sin(angle)
                    },
                    className: styles.node,
                });
                nodeSet.add(transaction.from_address);
            }

            if (!nodeSet.has(transaction.to_address)) {
                nodes.push({
                    id: transaction.to_address,
                    data: { label: `${transaction.to_address.slice(0, 6)}...${transaction.to_address.slice(-4)}` },

                    position: {
                        x: center.x + radius * Math.cos(angle + Math.PI / transaction.length),
                        y: center.y + radius * Math.sin(angle + Math.PI / transaction.length)
                     },
                    className: styles.node,
                });
                nodeSet.add(transaction.to_address);
            }

            // Add transaction as an edge
            edges.push({
                id: `${transaction.from_address} to ${transaction.to_address} ${index}`, // Added index to ensure unique edge IDs
                source: transaction.from_address,
                target: transaction.to_address,
                className: styles.edge,
            });
        });
        console.log(nodes)
        console.log(edges)
        return { nodes, edges };
    } catch (error) {
        console.error("Error fetching graph data:", error);
        return { nodes: initialNodes, edges: initialEdges };
    }
};