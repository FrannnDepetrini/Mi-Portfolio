import "./App.css";
import Page from "./page/Page";
import { LangContextProvider } from "./services/langContext/langContext";
function App() {
  return (
    <>
      <LangContextProvider>
        <Page></Page>
      </LangContextProvider>
    </>
  );
}

export default App;
