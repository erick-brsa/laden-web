import { useState } from "react";
import { ShoppingLayout } from "../../components/layouts";
import Accordion from "../../components/ui/pretty/Accordion";
import { getFaqs } from "../../database/dbFaqs";

import styles from "./Faqs.module.css";

const SupportPage = ({faqs}) => {
	return (
		<ShoppingLayout>
			<section className={`${styles["accordion"]} container`}>
				<h1 className={styles["title__faqs"]}>Preguntas Frecuentes</h1>
				<div className={styles["accordion__container"]}>
					{faqs.map(faq =>(
						<Accordion
							key= {faq.id}
							question= {faq.question}
							answer={faq.answer}
						/>
					))}
				</div>
			</section>
		</ShoppingLayout>
	);
};

export const getServerSideProps = async (ctx) => {
	const faqs = await getFaqs();

	return {
		props: {
			faqs,
		},
	};
};

export default SupportPage;
