import Head from "next/head";
import { ShoppingHeader, Footer } from "../ui";

const ShoppingLayout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#5864be" />
                <meta name="description" content={description} />
                <link rel="icon" href="/icons/icon.svg" />
                <title>{title}</title>
            </Head>
            <ShoppingHeader />
            {children}
            <Footer />
        </>
    )
}

export default ShoppingLayout