import React, { useCallback } from 'react';
import ReactFlow, { Background, Panel, ReactFlowProvider, useNodesState, useEdgesState, useReactFlow, addEdge, } from 'reactflow';
import 'reactflow/dist/style.css';
import useForceLayout from './useForceLayout';
import { initialNodes, initialEdges } from './initialElements';
import styles from './styles.module.css';

const proOptions = { account: 'paid-pro', hideAttribution: true };
const nodeOrigin = [0.5, 0.5];
const defaultEdgeOptions = { style: { stroke: '#ff66aa', strokeWidth: 3 } };

// default 
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

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ width: "100%", height: "75vh" }}>
        <ReactFlow 
            nodes={nodes}
            edges={edges} 
            onNodesChange={onNodesChange} 
            onEdgesChange={onEdgesChange} 
            proOptions={proOptions} 
            onConnect={onConnect} 
            nodeOrigin={nodeOrigin} 
            onNodeClick={onNodeClick} 
            defaultEdgeOptions={defaultEdgeOptions} 
            defaultViewport={{ x: window.innerWidth / 2, y: window.innerHeight / 2, zoom: 0 }}
        >
        <Panel position="top-left">
            <b>How to use:</b>Click any node to generate last wallet transaction to that node.
        </Panel>
        <Background />
        </ReactFlow>
    </div>
    );
}
function ReactFlowWrapper(props) {
    return (<ReactFlowProvider>
      <ReactFlowPro {...props}/>
    </ReactFlowProvider>);
}
export default ReactFlowWrapper;
