/* d3-force layout component for graph. Some settings overridden in main reactflow component. */

import { useEffect } from 'react';
import { forceSimulation, forceLink, forceManyBody, forceX, forceY, } from 'd3-force';
import { useReactFlow, useStore } from 'reactflow';

// selectors for the force layout
const elementCountSelector = (state) => state.nodeInternals.size + state.edges.length;
const nodesInitializedSelector = (state) => Array.from(state.nodeInternals.values()).every((node) => node.width && node.height) && state.nodeInternals.size;

// default strength and distance values before reactflow overrides.
function useForceLayout({ strength = -5000, distance = 10000 }) {
    const elementCount = useStore(elementCountSelector);
    const nodesInitialized = useStore(nodesInitializedSelector);
    const { setNodes, getNodes, getEdges } = useReactFlow();

    // useEffect hook to update the force layout
    useEffect(() => {
        const nodes = getNodes();
        const edges = getEdges();

        if (!nodes.length || !nodesInitialized) {
            return;
        }

        // set the initial positions of the nodes
        const simulationNodes = nodes.map((node) => ({
            ...node,
            x: node.position.x,
            y: node.position.y,
        }));

        // set the links between the nodes
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
                    position: { x: node.x ?? 100, y: node.y ?? 0 },
                    className: node.className,
            })));
        });
        
        return () => {
            simulation.stop();
        };
    }, [elementCount, getNodes, getEdges, setNodes, strength, distance, nodesInitialized]);
}
export default useForceLayout;
