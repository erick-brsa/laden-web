import { useState } from 'react';
import { getSession, } from 'next-auth/react';
import { ClientAuthLayout } from '../../components/layouts';
import styles from '../../styles/modules/Login.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seePassword, setSeePassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [seePasswordConfirm, setSeePasswordConfirm] = useState(false);

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
                                name="name"
                                id="name"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                // onBlur={(e) => console.log("tab")}
                                autoFocus
                            />
                            <label htmlFor="name" className={styles["formulario__label"]}>Nombre(s)</label>
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
                                name="email"
                                id="email"
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className={styles["formulario__label"]}>Correo electronico</label>
                        </div>
                        <p className={styles["formulario__input-error"]}>
                            El correo no es válido.
                        </p>
                    </div>
                    <div className={styles["formulario__grupo"]} id="grupo__contra">
                        <div className={styles["formulario__grupo-input"]}>
                            <input
                                type={seePassword ? "text" : "password"}
                                className={styles["formulario__input"]}
                                name="password"
                                id="password"
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className={styles["formulario__label"]}>Contraseña</label>
                            <span
                                className={styles["formulario__icon-password"]}
                            >
                                {seePassword ? (
                                    <EyeIcon
                                        onClick={() => setSeePassword(!seePassword)}
                                        width="1.4rem"
                                        height="1.4rem"
                                    />
                                ) : (

                                    <EyeOffIcon
                                        onClick={() => setSeePassword(!seePassword)}
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
                    <div className={styles["formulario__grupo"]} id="grupo__contra2">
                        <div className={styles["formulario__grupo-input"]}>
                            <input
                                type={seePasswordConfirm ? "text" : "password"}
                                className={styles["formulario__input"]}
                                name="passwordConfirm"
                                id="passwordConfirm"
                                placeholder=" "
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                            <label htmlFor="passwordConfirm" className={styles["formulario__label"]}>Confirmar contraseña</label>
                            <span
                                className={styles["formulario__icon-password"]}
                            >
                                {seePasswordConfirm ? (
                                    <EyeIcon
                                        onClick={() => setSeePasswordConfirm(!seePasswordConfirm)}
                                        width="1.4rem"
                                        height="1.4rem"
                                    />
                                ) : (

                                    <EyeOffIcon
                                        onClick={() => setSeePasswordConfirm(!seePasswordConfirm)}
                                        width="1.4rem"
                                        height="1.4rem"
                                    />
                                )}
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
                            ¿Deseas crear una cuenta empresarial? {''}
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