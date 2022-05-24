/* eslint-disable @next/next/no-img-element */
import { ShoppingLayout } from '../../components/layouts'
import { Banner } from '../../components/ui'

import styles from './Kisin.module.css'

const ServicesPage = () => {
    return (
        <ShoppingLayout
            title="Laden - Servicios"
            description="Laden es un proyecto desarrollado por KISIN."
        >
            <section>
                <Banner
                    image={`https://images.unsplash.com/photo-1580838368578-2eb2f83a2672?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470`}
                    title="LADEN"
                />
            </section>
            <main>
                <section className="container section">
                    <div className={styles["information__container"]}>
                        <div className={styles["information__section"]}>
                            <h3 className="information-main-title">
                                ¿Qué es LADEN?
                            </h3>
                            <div className={styles["information__text"]}>
                                <p className={styles["information__paragraph"]}>
                                    Se han desarrollado a través del tiempo, un sinfín de tiendas online, que han logrado colocarse como una de las mejores a nivel mundial, tiendas como Amazon, Mercado Libre, entre otras. Con Laden planeamos entrar en este campo, siendo reconocida por su trato con los clientes, es una de nuestras prioridades.
                                </p>
                                <p className={styles["information__paragraph"]}>
                                    El comercio minorista es uno de los sectores más afectados por la pandemia de COVID-19, tanto en forma positiva como negativa. Por un lado, supermercados, farmacias y mercados mantienen el acceso del consumidor a lo esencial: alimentos, medicamentos, artículos de tocador, etc.
                                </p>
                                <p className={styles["information__paragraph"]}>
                                A pesar de este entorno desafiante, la pandemia cada vez está más cerca de su fin, siendo en México la reanudación de la actividad económica a partir de junio 2021, un mes en donde los negocios tendrán que hacer uso de todo su conocimiento, oferta y calidad para llamar la atención del consumidor.
                                </p>
                            </div>
                            <img
                                src={`https://cdn.shopify.com/s/files/1/0426/9209/articles/Copy_of_tamano_imagenes_blog_posts_6_1024x768.png?v=1595441097`}
                                className={styles["information__image"]}
                                alt="¿Qué es Laden?"
                            />
                        </div>
                        <div className={styles["information__section"]}>
                            <h3 className="information__title">
                                Problemática a resolver
                            </h3>
                            <div className={styles["information__text"]}>
                                <p className={styles["information__paragraph"]}>
                                Tomando en cuenta los antecedentes de la perdida de empleos a raíz de la pandemia de COVID-19, nos encontramos con que muchas familias perdieron su empleo o no se vieron en la posibilidad de sostener un negocio, debido a la disminución de la demanda de productos no esenciales, pues el comercio minorista fue uno de los que se vio más afectado durante esta etapa.
                                </p>
                            </div>
                            <img
                                src={`https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470`}
                                className={styles["information__image"]}
                                alt="Misión"
                            />
                        </div>
                        <div className={styles["information__section"]}>
                            <h3 className={styles["information__title"]}>
                                Objetivo general
                            </h3>
                            <div className={styles["information__text"]}>
                                <p className={styles["information__paragraph"]}>
                                Desarrollar una aplicación virtual que facilite el comercio electrónico seguro. Que permita la venta y compra de productos de buena calidad, procurando la seguridad de nuestro clientes y usuarios para una mejor experiencia. Buscamos expandir la igualdad de oportunidades y ayudar a pequeños vendedores que hayan perdido sus empleos en la pandemia de COVID-19.
                                </p>
                            </div>
                            <img
                                src={`https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476`}
                                className={styles["information__image"]}
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </main>
        </ShoppingLayout>
    )
}

export default ServicesPage