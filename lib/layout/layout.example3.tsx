import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Asider from "./asider";

export default function () {
    return (
        <div className="example">
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Asider>Asider</Asider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}
