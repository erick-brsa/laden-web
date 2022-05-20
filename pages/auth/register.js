import { getSession, signIn } from 'next-auth/react'
import { ClientAuthLayout } from '../../components/layouts'

import styles from '../../styles/modules/Login.module.css'

const RegisterPage = ({ session }) => {
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
            <div className={styles["formulario__container"]}>
                <form className={styles["formulario"]} id="formulario">
                    <h2 className={styles["formulario__title"]}>Registro</h2>
                    <div className={styles["formulario__grupo"]} id="grupo__nombre">
                        <div className={styles["formulario__grupo-input"]}>
                            <input
                                type="text"
                                className="formulario__input"
                                name="nombre"
                                id="nombre"
                                placeholder=" "
                                autoFocus
                            />
                            <label htmlFor="nombre" className="formulario__label">Nombre(s)</label>
                        </div>
                        <p className={styles["formulario__input-error"]}>
                            El nombre solo debe contener letras o guiones bajos.
                        </p>
                    </div>
                    <div className="formulario__grupo" id="grupo__correo">
                        <div className="formulario__grupo-input">
                            <input
                                type="email"
                                className="formulario__input"
                                name="correo"
                                id="correo"
                                placeholder=" "
                            />
                            <label htmlFor="correo" className="formulario__label">Correo electronico</label>
                        </div>
                        <p className="formulario__input-error">
                            El correo no es válido.
                        </p>
                    </div>
                    <div className="formulario__grupo" id="grupo__contra">
                        <div className="formulario__grupo-input">
                            <input
                                type="password"
                                className="formulario__input"
                                name="contra"
                                id="contra"
                                placeholder=" "
                            />
                            <label htmlFor="contra" className="formulario__label">Contraseña</label>
                            <span>
                                <i id="toggle" className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                        <p className="formulario__input-error">
                            La contraseña debe tener de 4 a 12 caracteres.
                        </p>
                    </div>
                    <div className="formulario__grupo" id="grupo__contra2">
                        <div className="formulario__grupo-input">
                            <input
                                type="password"
                                className="formulario__input"
                                name="contra2"
                                id="contra2"
                                placeholder=" "
                            />
                            <label htmlFor="contra2" className="formulario__label">Confirmar contraseña</label>
                            <span>
                                <i id="toggle1" className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                        <p className="formulario__input-error">
                            Las contraseñas deben ser iguales.
                        </p>
                    </div>
                    <div className="grupo__parrafo">
                        <p className="formulario__parrafo">
                            ¿Ya tienes un cuenta?
                            <a href="entrar.html" className="formulario__link">Inicia Sesión</a>
                        </p>
                        <p className="formulario__parrafo">
                            ¿Deseas crear una cuenta empresarial?
                            <a href="./registro_vendedor.html" className="formulario__link">Haz click aquí.</a>
                        </p>
                    </div>

                    <div className="formulario__mensaje-error" id="formulario__mensaje-error">
                        <p>
                            <i className="fas fa-exclamation-triangle">
                                <b> Error:</b> Por favor rellena el formulario corectamente.
                            </i>
                        </p>
                    </div>
                    <div className="formulario__mensaje-exito" id="formulario__mensaje-exito">
                        <p>
                            <i className="fas fa-check">
                                <b> Listo:</b> Formulario enviado exitosamente.
                            </i>
                        </p>
                    </div>
                    <div className="formulario__grupo formulario__grupo-btn-enviar">
                        <input type="submit" className="formulario__btn" value="Crear cuenta">
                        </input>
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
        props: {
            session
        }
    }
}

export default RegisterPage