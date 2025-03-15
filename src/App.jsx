import "./App.css";
import Page from "./page/Page";
import { LangContextProvider } from "./services/langContext/langContext";
import { SectionContextProvider } from "./services/sectionContext/sectionContext";
import { ThemeContextProvider } from "./services/themeContext/themeContext";
function App() {
  return (
    <>
      <LangContextProvider>
        <SectionContextProvider>
          <ThemeContextProvider>
            <Page></Page>
          </ThemeContextProvider>
        </SectionContextProvider>
      </LangContextProvider>
    </>
  );
}

export default App;
