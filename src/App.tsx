import React from "react";
import { ThemeProvider } from "components/themeContext";
import Layout from "components/Layout";
import Hangman from "components/Hangman";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hangman />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
