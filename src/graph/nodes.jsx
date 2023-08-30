// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: "1",
    type: "outer",
    data: { label: "Wallet B" },
    position: { x: 0, y: -50 },
    sourcePosition: "right"
  },
  {
    id: "2",
    type: "inner",
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
    type: "inner",
    data: { label: "Wallet C" },
    position: { x: 1000, y: 0 },
    targetPosition: "left"
  },
  {
    id: "5",
    type: "inner",
    data: { label: "Wallet D" },
    position: { x: 300, y: 250 },
    targetPosition: "left"
  },
  {
    id: "6",
    type: "inner",
    data: { label: "Wallet E" },
    position: { x: 1000, y: 250 },
    targetPosition: "left"
  },
  {
    id: "7",
    type: "outer",
    data: { label: "Wallet F" },
    position: { x: 0, y: 150 },
    sourcePosition: "right"
  },
  {
    id: "8",
    type: "outer",
    data: { label: "Wallet G" },
    position: { x: 1200, y: 250 },
  },
  ];
  