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
const emojis = ['0x987...', '0x876...', '0x654...', '0x234...', '0x156...]'];

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
            evt.stopPropagation();
            //alert(`Date: 01-02-2023 | Transferred 1 ETH between ${edge.id}`);
            alert(`${edge.id} 1 ETH on 2023-02-01`)
        },
    );


    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ width: "100%", height: "80vh" }}>
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
