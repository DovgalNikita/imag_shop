import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FC } from 'react';
import { Providers } from '@/redux/provider';


const Template: FC <ITemplate> = ({children}) => {
    return(
        <>
            <Providers>
                <Head>
                    <meta content=""/>
                    <link rel="shortcut icon" href="../../assets/images/favicon.ico" type="image/ico"></link>
                </Head>
                <Header marginTop="25px"/>
                {
                    children
                }
                <Footer />
            </Providers>
        </>
    )
}

export default Template;