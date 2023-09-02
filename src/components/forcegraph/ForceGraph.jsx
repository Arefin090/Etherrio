import React, { useCallback } from 'react';
import ReactFlow, { Background, Panel, ReactFlowProvider, useNodesState, useEdgesState, useReactFlow, addEdge, Controls, } from 'reactflow';
import 'reactflow/dist/style.css';
import useForceLayout from './useForceLayout';
import { initialNodes, initialEdges } from './initialElements';
import styles from './styles.module.css';

// hides attribution. Allowed for educational accounts.
const proOptions = { account: 'paid-pro', hideAttribution: true };

const nodeOrigin = [0.5, 0.5];
const defaultEdgeOptions = { style: { stroke: '#ff66aa', strokeWidth: 3 } };

// generated secondary dummy nodes. Cycles through these values.
const emojis = ['0x1234534...', '0x2354323...', '0x12354234...', '0x234655...', '0x1564343...]'];

const randomEmoji = () => {
    return emojis[Math.floor(Math.random() * (emojis.length - 1))];
};

function ReactFlowPro({ strength = -5000, distance = 300 } = {}) {
    const { project } = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    useForceLayout({ strength, distance });

    const onNodeClick = useCallback(
        (evt, node) => {
            const childId = `${nodes.length + 1}`;
            const childNode = {
                id: childId,
                position: { x: node.position.x + 100, y: node.position.y + 100 },
                data: { label: randomEmoji() },
                className: styles.node,
        };
        const childEdge = { id: `${node.id}->${childId}`, source: node.id, target: childId };

        setNodes((nds) => [...nds, childNode]);
        setEdges((eds) => [...eds, childEdge]);
        }, 
        [nodes.length, setNodes, setEdges]
    );

    const onEdgeClick = useCallback(
        (evt, edge) => {
            const childId = `${nodes.length + 1}`;
            const childNode = {
                id: childId,
                position: { x: edge.sourcePosition.x + 100, y: edge.sourcePosition.y + 100 },
                data: { label: randomEmoji() },
                className: styles.node,
            };
            const childEdge = { id: `${edge.source}->${childId}`, source: edge.source, target: childId };

            setNodes((nds) => [...nds, childNode]);
            setEdges((eds) => [...eds, childEdge]);
        },
        [nodes.length, setNodes, setEdges]
    );


    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ width: "70%", height: "60vh" }}>
            <ReactFlow 
                nodes={nodes}
                edges={edges} 
                onNodesChange={onNodesChange} 
                onEdgesChange={onEdgesChange} 
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
                </Panel>
                <Background />
            </ReactFlow>
            <Controls />
        </div>
    );
}
function ReactFlowWrapper(props) {
    return (<ReactFlowProvider>
      <ReactFlowPro {...props}/>
    </ReactFlowProvider>);
}

export default ReactFlowWrapper;
