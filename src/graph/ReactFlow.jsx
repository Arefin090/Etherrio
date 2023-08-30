import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

// import data for the graph
import initialNodes from "./nodes.jsx";
import initialEdges from "./edges.jsx";

// import node styling
import CircleNode from "./CircleNode";
import OuterNode from "./OuterNode";
import InnerNode from "./InnerNode";

// edge line styling
const connectionLineStyle = { stroke: "#fff", pointerEvents: "all" };
const snapGrid = [20, 20];

// define node types
const nodeTypes = {
  circle: CircleNode,
  outer: OuterNode,
  inner: InnerNode
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

  return (
    <div style={{ width: "100%", height: "75vh" }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}

      //circle, inner, outer node properties
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}

    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
    </div>
  );
}

export default Flow;