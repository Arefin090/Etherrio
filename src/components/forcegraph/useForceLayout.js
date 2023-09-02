import { useEffect } from 'react';
import { forceSimulation, forceLink, forceManyBody, forceX, forceY, } from 'd3-force';
import { useReactFlow, useStore } from 'reactflow';

const elementCountSelector = (state) => state.nodeInternals.size + state.edges.length;
const nodesInitializedSelector = (state) => Array.from(state.nodeInternals.values()).every((node) => node.width && node.height) && state.nodeInternals.size;

function useForceLayout({ strength = -1000, distance = 150 }) {
    const elementCount = useStore(elementCountSelector);
    const nodesInitialized = useStore(nodesInitializedSelector);
    const { setNodes, getNodes, getEdges } = useReactFlow();

    useEffect(() => {
        const nodes = getNodes();
        const edges = getEdges();

        if (!nodes.length || !nodesInitialized) {
            return;
        }

        const simulationNodes = nodes.map((node) => ({
            ...node,
            x: node.position.x,
            y: node.position.y,
        }));

        const simulationLinks = edges.map((edge) => edge);
        const simulation = forceSimulation()
            .nodes(simulationNodes)
            .force('charge', forceManyBody().strength(strength))
            .force('link', forceLink(simulationLinks)
            .id((d) => d.id)
            .strength(0.05)
            .distance(distance))
            .force('x', forceX().x(0).strength(0.08))
            .force('y', forceY().y(0).strength(0.08))
            .on('tick', () => {
                setNodes(simulationNodes.map((node) => ({
                    id: node.id,
                    data: node.data,
                    position: { x: node.x ?? 0, y: node.y ?? 0 },
                    className: node.className,
            })));
        });
        
        return () => {
            simulation.stop();
        };
    }, [elementCount, getNodes, getEdges, setNodes, strength, distance, nodesInitialized]);
}
export default useForceLayout;
