/* eslint-disable @next/next/no-img-element */
import { ShoppingLayout } from '../../components/layouts'
import { Banner } from '../../components/ui'
import styles from './Kisin.module.css'

const AboutPage = () => {
    return (
        <ShoppingLayout
            title="Laden - Conócenos"
            description="Kisin es una empresa que se dedica al desarrollo de software."
        >
            <section>
                <Banner
                    image={`https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032`}
                    title="KISIN"
                />
            </section>
            <main>
                <section className="container section">
                    <div className={styles["information__container"]}>
                        <div className={styles["information__section"]}>
                            <h3 className="information-main-title">
                                Misión
                            </h3>
                            <div className={styles["information__text"]}>
                                <p className={styles["information__paragraph"]}>
                                    En Kisin tenemos como misión crear una experiencia única e innovadora en cada uno de nuestros softwares, tomando en cuenta las nuevas tecnologías en el mercado para mantenernos a la vanguardia y brindar la mejor experiencia posible, garantizando la seguridad y privacidad de nuestros usuarios.
                                </p>
                            </div>
                            <img
                                src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471`}
                                className={styles["information__image"]}
                                alt="Misión" 
                            />
                        </div>
                        <div className={styles["information__section"]}>
                            <h3 className="information__title">
                                Visión
                            </h3>
                            <div className={styles["information__text"]}>
                                <p className={styles["information__paragraph"]}>
                                    Posicionar a Kisin como una de las empresas líder en el mercado, siendo una de las preferidas por los usuarios en la red. Buscamos ser una empresa reconocida por cumplir con las expectativas de nuestros clientes y mantenerlos satisfechos con nuestros productos.
                                </p>
                            </div>
                            <img
                                src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470`}
                                className={styles["information__image"]}
                                alt="Visión" 
                            />
                        </div>
                        <div className={styles["information__section"]}>
                            <h3 className={styles["information__title"]}>
                                Filosofía
                            </h3>
                            <div className={styles["information__text"]}>
                                <p className={styles["information__paragraph"]}>
                                    En Kisin consideramos que la satisfacción de nuestros clientes es lo más importante. Estamos dispuestos a emplear todo nuestro potencial y conocimiento para garantizar la mejor calidad en nuestros proyectos. Siendo responsables y promoviendo un espacio de trabajo respetuoso.
                                </p>
                            </div>
                            <img
                                src={`https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470`}
                                className={styles["information__image"]}
                                alt="Filosofía"
                            />
                        </div>
                        <div className={styles["information__section"]}>
                            <h3 className={styles["information__title"]}>
                                Objetivo general
                            </h3>
                            <p className={styles["information__paragraph"]}>
                                En Kisin buscamos satisfacer las necesidades de nuestros clientes, dar respuesta a todas las inquietudes que estos tengan y facilitar el acceso a nuestros servicios. Nuestra empresa se centra en el consumidor, poniendo en marcha la tecnología necesaria para dar un servicio sobresaliente, especializado y dominante.
                            </p>
                            <img
                                src={`https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
                                className={styles["information__image"]}
                                alt="Obgetivo general"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </ShoppingLayout>
    )
}

export default AboutPage