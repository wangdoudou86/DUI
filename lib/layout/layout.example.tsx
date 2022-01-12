import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Asider from "./asider";
import "./layout.example.scss";

export default function () {
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Example 2</h1>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Asider>Asider</Asider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Example 3</h1>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Asider>Asider</Asider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Example 4</h1>
        <Layout>
          <Asider>Asider</Asider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
