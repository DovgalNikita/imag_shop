import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FC } from "react";


const Template: FC <ITemplate> = ({children}) => {
    return(
        <>
            <Head>
                <meta content=""/>
            </Head>
            <Header marginTop="25px"/>
            {
                children
            }
            <Footer />
        </>
    )
}

export default Template;