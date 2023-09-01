import styles from './styles.module.css';

// Initial node dummy elements for the force graph
export const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: 'Search Wallet' },
        className: styles.node,
      },
      {
        id: '2',
        position: { x: 10, y: 10 },
        data: { label: '0xA...' },
        className: styles.node,
      },
      {
        id: '3',
        position: { x: -10, y: -10 },
        data: { label: '0xB...' },
        className: styles.node,
      },
      {
        id: '4',
        position: { x: -10, y: 10 },
        data: { label: '0xC...' },
        className: styles.node,
      },
      {
        id: '5',
        position: { x: 10, y: 10 },
        data: { label: '0xD...' },
        className: styles.node,
      },
      {
        id: '6',
        position: { x: 10, y: 10 },
        data: { label: '0xE...' },
        className: styles.node,
      },
];

// Initial edge dummy elements for the force graph
export const initialEdges = [
    {
        id: '1->2',
        source: '1',
        target: '2',
        animated: true,
        label: '0.2 ETH',
        labelBgPadding: [20, 10],
        className: styles.edge,
        fontSize: 20,
      },
      {
        id: '1->3',
        source: '1',
        target: '3',
        label: '0.3 ETH',
        className: styles.edge,
      },
      {
        id: '1->4',
        source: '1',
        target: '4',
        label: '0.5 ETH',
        className: styles.edge,
      },
      {
        id: '1->5',
        source: '1',
        target: '5',
        label: '0.1 ETH',
        className: styles.edge,
      },
      {
        id: '1->6',
        source: '1',
        target: '6',
        label: '0.1 ETH',
        className: styles.edge,
      }
];
