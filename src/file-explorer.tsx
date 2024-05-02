import { useState } from "react";
import { FileSystemItem } from "./data";

type Props = {
  node: FileSystemItem;
};

const FileExplorer = ({ node }: Props) => {
  const [showFolderContent, setShowFolderContent] = useState(false);
  const handleFolderClick = () => {
    setShowFolderContent(!showFolderContent);
  };
  return (
    <div style={{ marginLeft: "10px" }}>
      <h3
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleFolderClick()}
      >
        {node.name}
      </h3>
      {showFolderContent &&
        node.items &&
        node.items.map((child) => <FileExplorer node={child} />)}
    </div>
  );
};

export default FileExplorer;
