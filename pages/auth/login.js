import { useState } from 'react';
import { getSession, signIn } from 'next-auth/react'
import { ClientAuthLayout } from '../../components/layouts'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import styles from '../../styles/modules/Login.module.css'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email.length > 0 && password.length > 0) {
            await signIn('credentials', { email, password })
        }
    }

    return (
        <ClientAuthLayout
            title="Laden - Inicio de sesión"
            description="Inicio de sesión"
        >
            <div className={styles["formulario__container"]}>
                <form
                    className={styles["formulario"]}
                    id="formulario"
                >
                    <h2 className={styles["formulario__title"]}>Iniciar sesión</h2>
                    <div className={styles["formulario__grupo"]} id="grupo__correo">
                        <div className={styles["formulario__grupo-input"]}>
                            <input
                                type="email"
                                className={styles["formulario__input"]}
                                name="correo"
                                id="correo"
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="correo" className={styles["formulario__label"]}>Correo electronico</label>
                        </div>
                        <p className={styles["formulario__input-error"]}>
                            El correo no es válido.
                        </p>
                    </div>
                    <div className={styles["formulario__grupo"]} id="grupo__contra">
                        <div className={styles["formulario__grupo-input"]}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className={styles["formulario__input"]}
                                name="password"
                                id="password"
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className={styles["formulario__label"]}>Contraseña</label>
                            <span className={styles["formulario__icon-password"]}>
                                {showPassword ? (
                                    <EyeIcon
                                        onClick={() => setShowPassword(!showPassword)}
                                        width="1.4rem"
                                        height="1.4rem"
                                    />
                                ) : (

                                    <EyeOffIcon
                                        onClick={() => setShowPassword(!showPassword)}
                                        width="1.4rem"
                                        height="1.4rem"
                                    />
                                )}
                            </span>
                        </div>
                        <p className={styles["formulario__input-error"]}>
                            La contraseña debe tener de 4 a 12 caracteres.
                        </p>
                    </div>
                    <div className={styles["grupo__parrafo"]}>
                        <p className={styles["formulario__parrafo"]}>
                            ¿No tienes un cuenta? {''}
                            <Link href="/auth/register">
                                <a className={styles["formulario__link"]}>Regístrate</a>
                            </Link>
                        </p>
                        <p className={styles["formulario__parrafo"]}>
                            ¿Deseas crear una cuenta empresarial? {''}
                            <Link href="/auth/register_seller">
                                <a className={styles["formulario__link"]}>Haz click aquí</a>
                            </Link>
                        </p>
                    </div>

                    <div className={styles["formulario__mensaje-error"]} id="formulario__mensaje-error">
                        <p>
                            <i className="fas fa-exclamation-triangle">
                                <b> Error:</b> Por favor rellena el formulario corectamente.
                            </i>
                        </p>
                    </div>
                    <div className={styles["formulario__mensaje-exito"]} id="formulario__mensaje-exito">
                        <p>
                            <i className="fas fa-check">
                                <b> Listo:</b> Formulario enviado exitosamente.
                            </i>
                        </p>
                    </div>
                    <div>

                        <div className={styles["formulario__grupo-btn-enviar"]}>
                            <button
                                type="submit"
                                className={styles["formulario__btn"]}
                                onClick={handleSubmit}
                            >
                                Ingresar
                            </button>
                        </div>
                        <div className={styles["formulario__grupo-btn-enviar"]}>
                            <button
                                type='button'
                                onClick={() => signIn('google')}
                                className={styles["formulario__btn-google"]}
                            >
                                Iniciar sesión con Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </ClientAuthLayout>
    )
}

export const getServerSideProps = async ({ req, query }) => {

    const session = await getSession({ req })

    const { q = '/' } = query

    if (session) {
        return {
            redirect: {
                destination: q.toString(),
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default LoginPage