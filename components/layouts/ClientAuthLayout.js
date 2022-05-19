import { ClientAuthHeader } from '../ui';

export const ClientAuthLayout = ({ children }) => {
    return (
        <>
            <ClientAuthHeader />
            {children}
        </>
    )
}
