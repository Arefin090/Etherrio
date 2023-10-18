import React, { useCallback } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import styles from './styles.module.css';

function ReactFlowWrapper({ data }) {
    const onNodeClick = useCallback(
        (evt, node) => {
            // Implement any logic you want when a node is clicked
        },
        []
    );

    const onEdgeClick = useCallback(
        (evt, edge) => {
            // Implement any logic you want when an edge is clickedÁÁÁÁÁ
        },
    );

    return (
        <div style={{ width: "95%", height: "60vh" }}>
            <ReactFlow 
                elements={data}
                onNodeClick={onNodeClick}
                onEdgeClick={onEdgeClick} 
                defaultEdgeOptions={{ style: { stroke: '#ff66aa', strokeWidth: 3 } }} 
                defaultViewport={{ x: window.innerWidth / 2, y: window.innerHeight / 2, zoom: 0 }}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default ReactFlowWrapper;







/* Force Graph of wallet and directly connected nodes. Expands as you explore outside nodes. */

// import React, { useCallback } from 'react';
// import ReactFlow, { Background, Panel, ReactFlowProvider, useNodesState, useEdgesState, addEdge, Controls, } from 'reactflow';
// import 'reactflow/dist/style.css';
// import useForceLayout from './useForceLayout';
// import { initialNodes, initialEdges } from './initialElements';
// import styles from './styles.module.css';

// // hides attribution. Allowed for educational accounts.
// const proOptions = { account: 'paid-pro', hideAttribution: true };

// // nodeOrigin set to center of node. Default is top left corner.
// const nodeOrigin = [0.5, 0.5];
// const defaultEdgeOptions = { style: { stroke: '#ff66aa', strokeWidth: 3 } };

// // generated secondary dummy nodes. Cycles through these values.
// const dummyNodes = ['0x987...', '0x876...', '0x654...', '0x234...', '0x156...]'];

// // returns random data from list. Used to generate dummy data.
// const randomData = () => {
//     return dummyNodes[Math.floor(Math.random() * (dummyNodes.length - 1))];
// };

// // main ReactFlow component. High negative strength set for more spread out nodes.
// function ReactFlowPro({ strength = -5000, distance = 300 } = {}) {
//     // const { project } = useReactFlow();
//     const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//     const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//     useForceLayout({ strength, distance });

//     // memoized callback to add nodes onclick. Only changes if one of the inputs has changed.
//     const onNodeClick = useCallback(
//         (evt, node) => {
//             const childId = `${nodes.length + 1}`;
//             const childNode = {
//                 id: childId,
//                 position: { x: node.position.x + 100, y: node.position.y + 100 },
//                 data: { label: randomData() },
//                 className: styles.node,
//         };
//         const childEdge = { id: `${node.id}->${childId}`, source: node.id, target: childId };

//         setNodes((nds) => [...nds, childNode]);
//         setEdges((eds) => [...eds, childEdge]);
//         }, 
//         [nodes.length, setNodes, setEdges]
//     );

//     // alert on edge click. Dummy data for now.
//     const onEdgeClick = useCallback(
//         (evt, edge) => {
//             evt.stopPropagation();
//             //alert(`Date: 01-02-2023 | Transferred 1 ETH between ${edge.id}`);
//             alert(`Wallets ${edge.id} transferred 1 ETH on 2023-02-01`)
//         },
//     );

//     // memoized callback to add edge between nodes. Only changes if one of the inputs has changed.
//     const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

//     return (
//         <div style={{ width: "95%", height: "60vh" }}>
//             <ReactFlow 
//                 nodes={nodes}
//                 edges={edges} 
//                 onNodesChange={onNodesChange} 
//                 onEdgesChange={onEdgesChange} 
//                 proOptions={proOptions} 
//                 onConnect={onConnect} 
//                 nodeOrigin={nodeOrigin} 
//                 onNodeClick={onNodeClick}
//                 onEdgeClick={onEdgeClick} 
//                 defaultEdgeOptions={defaultEdgeOptions} 
//                 defaultViewport={{ x: window.innerWidth / 2, y: window.innerHeight / 2, zoom: 0 }}
//             >
//                 <Panel position="top-left">
//                     <p><b>How to use:</b> Click any node to generate most recent wallet transaction to that node. </p>
//                     <p>Clicking a node again will generate second most recent wallet transactions, then third most recent, etc.</p>
//                     <p>Clicking an edge will display the date and amount of the transaction.</p>
//                     <p>Click Wallet tab to view detailed information</p>
//                 </Panel>
//                 <Background />
//             </ReactFlow>
//             <Controls />
//         </div>
//     );
// }

// function ReactFlowWrapper(props) {
//     return (<ReactFlowProvider>
//       <ReactFlowPro {...props}/>
//     </ReactFlowProvider>);
// }

// export default ReactFlowWrapper;
