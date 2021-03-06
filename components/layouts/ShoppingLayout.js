import Head from "next/head";
import { ShoppingHeader, Footer } from "../ui";

export const ShoppingLayout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#5864be" />
                <meta name="description" content={description} />
                <title>{title}</title>
            </Head>
            <ShoppingHeader />
            {children}
            <Footer />
        </>
    )
}
