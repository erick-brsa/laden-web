import { useState } from "react";
import { ShoppingLayout } from "../../components/layouts";
import Accordion from "../../components/ui/pretty/Accordion";

import styles from "./Faqs.module.css";

const SupportPage = () => {
	return (
		<ShoppingLayout>
			<section className={`${styles["accordion"]} container`}>
				<div className={styles["accordion__container"]}>
					<Accordion
						question="¿Cómo puedo pagar una compra?"
						answer="Puedes realizar el pago de tu compra con cualquiera de los siguientes 
                        medios:
                        Tarjeta de crédito, débito o recargables
                        En efectivo 
                        Transferencia o depósito bancario"
					/>
					<Accordion
						question="¿Cómo puedo recibir o recoger un producto?"
						answer="Puede recibir el producto en tu domicilio, ingresando tu ubicación y te será 
                        enviado por correo.
                        También puede acordar con el vendedor el lugar de la entrega, esto será 
                        directamente con el vendedor"
					/>
					<Accordion
						question="¿Cómo elegir a que vendedor comprarle?"
						answer="Para escoger al mejor vendedor revisa la puntuación de este, puedes tomar 
                        en cuenta las reseñas de sus productos, así como la calificación que recibe. 
                        Lee con atención la publicación, asegúrate de que el producto tenga 
                        garantía, si es nuevo. Si las dudas persisten, contacta al vendedor y 
                        pregunta todo lo que quieras saber."
					/>
					<Accordion
						question="¿Cómo eliminar mi cuenta?"
						answer="Para eliminar su cuenta es necesario ir a la opción de perfil o cuenta, ir a 
                        configuración y escoger la opción de “Eliminar cuenta”"
					/>
					{/* <Accordion
                        {children}
						question="¿Qué medidas de seguridad puedo tomar al recibir un pedido?"
						answer="-Mantener una distancia segura
                        - No manipular objetos de terceros
                        - Lavarse las manos 
                        - Desinfectar superficies del paquete"
					/> */}
				</div>
			</section>
		</ShoppingLayout>
	);
};

export default SupportPage;
