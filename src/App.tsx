import { data } from "./data";
import FileExplorer from "./file-explorer";
type Props = {};

const App = (props: Props) => {
  // const [treeNodes, setTreeNodes] = useState(data);

  return <FileExplorer node={data} />;
};
export default App;
