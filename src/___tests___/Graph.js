import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls
} from "reactflow";
import "reactflow/dist/style.css";
import CircleNode from "./CircleNode";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  circle: CircleNode
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes([
      {
        id: "1",
        type: "circle",
        data: { label: "Wallet B" },
        position: { x: 0, y: -50 },
        sourcePosition: "right"
      },
      {
        id: "2",
        type: "circle",
        data: { label: "Wallet A" },
        position: { x: 300, y: 0 }
      },
      {
        id: "3",
        type: "circle",
        data: { label: "Main Wallet" },
        position: { x: 650, y: 125 },
        targetPosition: "left"
      },
      {
        id: "4",
        type: "circle",
        data: { label: "Wallet C" },
        position: { x: 1050, y: -125 },
        targetPosition: "left"
      },
      {
        id: "5",
        type: "circle",
        data: { label: "Wallet D" },
        position: { x: 250, y: 250 },
        targetPosition: "left"
      },
      {
        id: "6",
        type: "circle",
        data: { label: "Wallet E" },
        position: { x: 1050, y: 250 },
        targetPosition: "left"
      },
      {
        id: "7",
        type: "circle",
        data: { label: "Wallet F" },
        position: { x: 0, y: 150 },
        sourcePosition: "right"
      }
    ]);

    setEdges([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#fff" }
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#fff" }
      },
      {
        id: "e1-2",
        source: "3",
        target: "4",
        animated: true,
        style: { stroke: "#fff" }
      },
      {
        id: "e1-2",
        source: "5",
        target: "3",
        animated: true,
        style: { stroke: "#fff" }
      },
      {
        id: "e1-2",
        source: "3",
        target: "6",
        animated: true,
        style: { stroke: "#fff" }
      },
      {
        id: "e1-3",
        source: "7",
        target: "2",
        animated: true,
        style: { stroke: "#fff" },
        orient: 'auto-start-reverse'
      }


    ]);
  }, [setEdges, setNodes]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    [setEdges]
  );
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        fitView
        style={{ background: "#333" }}
        attributionPosition="bottom-left"
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;



