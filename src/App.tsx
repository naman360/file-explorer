import { data, FileSystemItem } from "./data";
import FileExplorer from "./components/file-explorer";
import { useState } from "react";
import useTraverseTree from "./hooks/traverse";
type Props = {};

const App = (props: Props) => {
  const [treeNodes, setTreeNodes] = useState<FileSystemItem>(data);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (
    folderId: string | number,
    item: string,
    isFolder: boolean
  ) => {
    const finalTree = insertNode(treeNodes, folderId, item, isFolder);
    console.log(finalTree);
    setTreeNodes(finalTree);
  };
  return <FileExplorer node={treeNodes} handleInsertNode={handleInsertNode} />;
};
export default App;
