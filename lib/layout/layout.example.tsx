import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function () {
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <Layout style={{ height: 300 }} className="hi">
          <Header className="hello">Header</Header>
          <Content className="hello22">Content</Content>
          <Footer className="hello33">Footer</Footer>
        </Layout>
      </div>
    </div>
  );
}
