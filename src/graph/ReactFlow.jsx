// ReactFlow.jsx
import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from "./nodes.jsx";
import initialEdges from "./edges.jsx";

import CircleNode from "./CircleNode";
import OuterNode from "./OuterNode";
import InnerNode from "./InnerNode";

const connectionLineStyle = { stroke: "#fff", pointerEvents: "all" };
const snapGrid = [20, 20];

const nodeTypes = {
  circle: CircleNode,
  outer: OuterNode,
  inner: InnerNode,
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (x) => setNodes((newNode) => applyNodeChanges(x, newNode)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (x) => setEdges((eds) => applyEdgeChanges(x, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (x) => setEdges((eds) => addEdge({ ...x, animated: true }, eds)),
    [setEdges]
  );

  const onElementClick = (event, element) => {
    if (element.type === "inner") {
      const newNodes = nodes.map((node) => {
        if (node.type === "outer") {
          return { ...node, visible: !node.visible };
        }
        return node;
      });
      setNodes(newNodes);
    }
  };

  const filteredNodes = nodes.filter((node) => node.visible !== false);

  return (
    <div style={{ width: "80%", height: "75vh", display: "flex" }}>
      <ReactFlow
        nodes={filteredNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onElementClick={onElementClick}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
