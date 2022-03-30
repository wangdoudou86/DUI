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
                <Asider>Asider</Asider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
}
