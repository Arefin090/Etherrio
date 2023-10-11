import styles from './styles.module.css';

// Initial node dummy elements for the force graph
export const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: '0x8d08aad4b2bac2bb761ac4781cf62468c9ec47b4' },
        className: styles.node,
      },
      // {
      //   id: '2',
      //   position: { x: 10, y: 10 },
      //   data: { label: '0x234...' },
      //   className: styles.node,
      // },
      // {
      //   id: '3',
      //   position: { x: -10, y: -10 },
      //   data: { label: '0x345...' },
      //   className: styles.node,
      // },
      // {
      //   id: '4',
      //   position: { x: -10, y: 10 },
      //   data: { label: '0x456...' },
      //   className: styles.node,
      // },
      // {
      //   id: '5',
      //   position: { x: 10, y: 10 },
      //   data: { label: '0x567...' },
      //   className: styles.node,
      // },
      // {
      //   id: '6',
      //   position: { x: 10, y: 10 },
      //   data: { label: '0x678...' },
      //   className: styles.node,
      // },
];

// Initial edge dummy elements for the force graph
export const initialEdges = [
    // {
    //     id: '0x123... to 0x234...',
    //     source: '1',
    //     target: '2',
    //     className: styles.edge,
    //   },
    //   {
    //     id: '0x123... to 0x345...',
    //     source: '1',
    //     target: '3',
    //     className: styles.edge,
    //   },
    //   {
    //     id: '0x123... to 0x456...',
    //     source: '1',
    //     target: '4',
    //     className: styles.edge,
    //   },
    //   {
    //     id: '0x123... to 0x567...',
    //     source: '1',
    //     target: '5',
    //     className: styles.edge,
    //   },
    //   {
    //     id: '0x123... to 0x678...',
    //     source: '1',
    //     target: '6',
    //     className: styles.edge,
    //   }
];
