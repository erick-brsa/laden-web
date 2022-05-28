import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { ClientAuthLayout } from '../../components/layouts'
import styles from '../../styles/modules/Login.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const fields = { name, email, password, passwordConfirm }

    const router = useRouter();

    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(fields).every(field => field.match(expressions[field.name]) && field.length > 0)) {
            if (password === passwordConfirm) {
                axios.post('/api/user/register', fields)
                router.push('/auth/login');
            }
        }
    }

    return (
        <ClientAuthLayout
            title="Laden - Registro"
            description="Registro de usuario"
        >
            <div className={styles["formulario__container"]}>
                <form
                    method='POST'
                    className={styles["formulario"]}
                    id="formulario"
                >
                    <h2 className={styles["formulario__title"]}>Registro</h2>
                    <div className={styles["formulario__grupo"]} id="grupo__nombre">
                        <div className={styles["formulario__grupo-input"]}>
                            <input
                                type="text"
                                className={styles["formulario__input"]}
                                name="nombre"
                                id="nombre"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                // onBlur={(e) => console.log("tab")}
                                autoFocus
                            />
                            <label htmlFor="nombre" className={styles["formulario__label"]}>Nombre(s)</label>
                        </div>
                        <p className={styles["formulario__input-error"]}>
                            El nombre solo debe contener letras o guiones bajos.
                        </p>
                    </div>
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
                                type="password"
                                className={styles["formulario__input"]}
                                name="password"
                                id="password"
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className={styles["formulario__label"]}>Contraseña</label>
                            <span>
                                <i id="toggle" className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                        <p className={styles["formulario__input-error"]}>
                            La contraseña debe tener de 4 a 12 caracteres.
                        </p>
                    </div>
                    <div className={styles["formulario__grupo"]} id="grupo__contra2">
                        <div className={styles["formulario__grupo-input"]}>
                            <input
                                type="password"
                                className={styles["formulario__input"]}
                                name="passwordConfirm"
                                id="passwordConfirm"
                                placeholder=" "
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                            <label htmlFor="passwordConfirm" className={styles["formulario__label"]}>Confirmar contraseña</label>
                            <span>
                                <i id="toggle1" className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                        <p className={styles["formulario__input-error"]}>
                            Las contraseñas deben ser iguales.
                        </p>
                    </div>
                    <div className={styles["grupo__parrafo"]}>
                        <p className={styles["formulario__parrafo"]}>
                            ¿Ya tienes un cuenta? {''}
                            <Link href="/auth/login">
                                <a className={styles["formulario__link"]}>Inicia Sesión</a>
                            </Link>
                        </p>
                        <p className={styles["formulario__parrafo"]}>
                            ¿Deseas crear una cuenta empresarial?
                            <Link href="/auth/register_seller">
                                <a className={styles["formulario__link"]}>Haz click aquí.</a>
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
                    <div className={`${styles["formulario__grupo"]} ${styles["formulario__grupo-btn-enviar"]}`}>
                        <button
                            type="submit"
                            className={styles["formulario__btn"]}
                            onClick={handleSubmit}
                        >
                            Crear cuenta
                        </button>
                    </div>
                </form>
            </div>
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
        props: {}
    }
}

export default RegisterPage