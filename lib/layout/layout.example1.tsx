import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function () {
    return (
        <div className="example">
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}
