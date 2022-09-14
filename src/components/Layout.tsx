import React from "react";
import { ReactNode } from "react";
import { Header } from "./Header";
import Seo from "./_common/Seo";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Seo />
            {/* <Header /> */}
            <main className="pt-16">{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
