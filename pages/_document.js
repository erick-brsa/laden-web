import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charSet="utf-8" />
                    <meta property="og:image" content="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    <meta property="og:image:width" content="1280" />
                    <meta property="og:image:height" content="720" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    <link rel="icon" href="/icons/icon.svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument