import React from "react";
import Layout from "../components/Layout";
import Songcards from "../components/Songcards";
import SearchBar from "../components/SearchBar";

export default () => (
  <Layout>
    <div className="gutter">
      <SearchBar />
      <Songcards />
    </div>
  </Layout>
);
