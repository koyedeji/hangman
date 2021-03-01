import React from "react";
import { Provider } from "react-redux";
import Layout from "components/Layout";
import Hangman from "components/Hangman";
import configureStore from "store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Hangman />
      </Layout>
    </Provider>
  );
}

export default App;
