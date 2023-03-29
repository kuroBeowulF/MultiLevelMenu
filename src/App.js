import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import ToolsBar from "./Components/ToolsBar/ToolsBar";
import MenuContextProvider from "./Helpers/Context";
import { MenuModal } from "./Components/Utilities/modal";
import MenuContent from "./Components/MenuItems/MenuContent";
import { AlertError } from "./Components/Utilities/alertError";
const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <MenuContextProvider>
          <ToolsBar />
          <MenuContent />
          <MenuModal />
          <AlertError />
        </MenuContextProvider>
      </Layout>
    </>
  );
};

export default App;
