import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { Background, Panel, ReactFlowProvider, useNodesState, useEdgesState, addEdge, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import useForceLayout from './useForceLayout';
import styles from './styles.module.css';
import { fetchGraphData } from './initialElements';

const proOptions = { account: 'paid-pro', hideAttribution: true };
const nodeOrigin = [0.5, 0.5];
const defaultEdgeOptions = { style: { stroke: '#ff66aa', strokeWidth: 3 } };

function ReactFlowPro({ strength = -5000, distance = 300, address } = {}) {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useForceLayout({ strength, distance });

    useEffect(() => {
        const fetchData = async () => {
            const { nodes: fetchedNodes, edges: fetchedEdges } = await fetchGraphData(address, true);
            setNodes(fetchedNodes);
            setEdges(fetchedEdges);
        };

        fetchData();
    }, [address]);

    const onNodeClick = useCallback(
        async (evt, node) => {
            // Fetch data for the clicked node's address
            const { nodes: fetchedNodes, edges: fetchedEdges } = await fetchGraphData(node.id, false);
    
            console.log("Fetched Nodes:", fetchedNodes);
            console.log("Fetched Edges:", fetchedEdges);
    
            // Add the new nodes and edges to the graph
            setNodes(prevNodes => {
                const newNodes = fetchedNodes.filter(fNode => !prevNodes.some(node => node.id === fNode.id));
                return [...prevNodes, ...newNodes];
            });
    
            setEdges(prevEdges => {
                const newEdges = fetchedEdges.filter(fEdge => !prevEdges.some(edge => edge.id === fEdge.id));
                return [...prevEdges, ...newEdges];
            });
        },
        []  // Empty dependency array
    );

    const onEdgeClick = useCallback(
        (evt, edge) => {
            evt.stopPropagation();
            // Display more meaningful information about the transaction
            alert(`Transaction from ${edge.source} to ${edge.target}`);
        },
    );

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <div style={{ width: "95%", height: "60vh" }}>
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                proOptions={proOptions} 
                onConnect={onConnect} 
                nodeOrigin={nodeOrigin} 
                onNodeClick={onNodeClick}
                onEdgeClick={onEdgeClick} 
                defaultEdgeOptions={defaultEdgeOptions} 
                defaultViewport={{ x: window.innerWidth / 2, y: window.innerHeight / 2, zoom: 0 }}
            >
                <Panel position="top-left">
                    <p><b>How to use:</b> Click any node to generate most recent wallet transaction to that node. </p>
                    <p>Clicking a node again will generate second most recent wallet transactions, then third most recent, etc.</p>
                    <p>Clicking an edge will display the date and amount of the transaction.</p>
                    <p>Click Wallet tab to view detailed information</p>
                </Panel>
                <Background />
            </ReactFlow>
            <Controls />
        </div>
    );
}

function ReactFlowWrapper(props) {
    return (
        <ReactFlowProvider>
            <ReactFlowPro {...props} />
        </ReactFlowProvider>
    );
}

export default ReactFlowWrapper;
