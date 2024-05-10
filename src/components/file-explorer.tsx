import { useState } from "react";
import { FileSystemItem } from "../data";

type Props = {
  node: FileSystemItem;
  handleInsertNode: (
    folderId: string | number,
    item: string,
    isFolder: boolean
  ) => void;
};

const FileExplorer = ({ node, handleInsertNode }: Props) => {
  const [showFolderContent, setShowFolderContent] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleFolderClick = () => {
    setShowFolderContent(!showFolderContent);
  };

  const handleNewFolderClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isFolder: boolean
  ) => {
    e.stopPropagation(); //because if we dont put this it is going to fire onclick of the folder handleFolderClick
    setShowFolderContent(true);
    setShowInput({ visible: true, isFolder });
  };

  const onAddFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const entityName = e.currentTarget.value;
    const isFolder = showInput.isFolder;
    if (e.keyCode === 13 && entityName) {
      setShowInput({ ...showInput, visible: false });
      handleInsertNode(node.id, entityName, isFolder);
    }
  };

  if (node.isFolder) {
    return (
      <div style={{ marginLeft: "5px" }}>
        <h3
          style={{
            cursor: "pointer",
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
            userSelect: "none",
          }}
          onClick={() => handleFolderClick()}
        >
          {node.isFolder ? "🗂" : "📄"} {node.name}
          <div>
            <button onClick={(e) => handleNewFolderClick(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleNewFolderClick(e, false)}>
              File +
            </button>
          </div>
        </h3>

        {/* Use only style property to show as when you add a check at rendering FileExplorer for showing content, 
      clickng on root folder changes state to false hence the children are unmounted and start with a
       fresh false state */}

        <div
          style={{
            display: showFolderContent ? "block" : "none",
            marginLeft: "20px",
          }}
        >
          {showInput.visible ? (
            <div>
              {showInput.isFolder ? "🗂" : "📄"}{" "}
              <input
                type="text"
                onKeyDown={(e) => onAddFolder(e)}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
              />
            </div>
          ) : null}
          {node.items &&
            node.items.map((child) => (
              <FileExplorer
                handleInsertNode={handleInsertNode}
                node={child}
                key={child.id}
              />
            ))}
        </div>
      </div>
    );
  } else
    return (
      <h3
        style={{
          cursor: "pointer",
          display: "flex",
          width: "300px",
          justifyContent: "space-between",
          userSelect: "none",
        }}
      >
        {node.isFolder ? "🗂" : "📄"} {node.name}
      </h3>
    );
};

export default FileExplorer;
