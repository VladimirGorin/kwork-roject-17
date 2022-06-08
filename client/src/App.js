import React from "react";
import Layout from "./containers/Layout/Layout";
import {Routes,Route} from "react-router-dom";
import Home from "./containers/Home/Home";


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Layout>
    )
}

export default App;
