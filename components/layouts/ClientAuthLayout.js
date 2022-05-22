import Head from 'next/head';
import { ClientAuthHeader } from '../ui';

export const ClientAuthLayout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <ClientAuthHeader />
            {children}
        </>
    )
}
