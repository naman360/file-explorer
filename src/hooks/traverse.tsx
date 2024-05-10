import { FileSystemItem } from "../data";

const useTraverseTree = () => {
  const insertNode = (
    tree: FileSystemItem,
    folderId: string | number,
    item: string,
    isFolder: boolean
  ): FileSystemItem => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = tree.items.map((child) => {
      return insertNode(child, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  };
  return { insertNode };
};

export default useTraverseTree;
