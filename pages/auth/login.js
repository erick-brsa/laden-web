import { getSession, signIn } from 'next-auth/react'
import { ClientAuthLayout } from '../../components/layouts'

import styles from '../../styles/modules/Login.module.css'

const LoginPage = ({ session }) => {
    return (
        <ClientAuthLayout>
            {/* <div>
                <section className='container mx-auto py-20'>
                    {!session && (
                        <div className='flex gap-10 justify-center'>
                            <button
                                className='p-5 bg-blue-500 rounded text-white text-3xl'
                                onClick={() => signIn('google')}>Iniciar sesión con Google
                            </button>
                            <button
                                className='p-5 bg-gray-500 rounded text-white text-3xl'
                                onClick={() => signIn('github')}>
                                Iniciar sesión con GitHub
                            </button>
                        </div>
                    )}
                </section>
            </div> */}
        </ClientAuthLayout>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (session) return {
        redirect: {
            destination: "/",
            permanent: false
        }
    }

    return {
        props: {
            session
        }
    }
}

export default LoginPage