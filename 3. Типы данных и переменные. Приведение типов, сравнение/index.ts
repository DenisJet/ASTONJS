function getLength(atr: any) {
  if (atr === null || atr === undefined) return 0;
  return atr.length ? atr.length : 0;
}

//////////////////////////////////////////////

type NodeType = {
  value: number;
  left: NodeType | undefined;
  right: NodeType | undefined;
};

function compare(node1: NodeType | undefined, node2: NodeType | undefined) {
  return JSON.stringify(node1) === JSON.stringify(node2) ? true : false; // ????????????
}

function compareRecursive(node1: NodeType | undefined, node2: NodeType | undefined) {
  if (node1 === undefined && node2 === undefined) return true;

  if (node1 === undefined || node2 === undefined) return false;

  if (node1.value !== node2.value) return false;

  return compareRecursive(node1.left, node2.left) && compareRecursive(node1.right, node2.right);
}
