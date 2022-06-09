import styles from "../Support.module.css";
import { SupportLayout } from "../../../components/layouts";
import { Faq } from "../../../components/ui";
import { getFaqs } from "../../../database/dbFaqs";

const FaqsPage = ({ faqs }) => {
	return (
		<SupportLayout title="Laden - FAQS" description="FAQS">
			<div className={styles['container__page']}>
				<div className={styles["container__content"]}>
					<h2>FAQs</h2>
					{faqs.map((faq) => (
						<Faq
							key={faq.id}
							faq={faq}
						/>
					))}
				</div>
			</div>
		</SupportLayout>
	);
};

export const getServerSideProps = async (context) => {
	const faqs = await getFaqs();
	return {
		props: {
			faqs,
		},
	};
};

export default FaqsPage;
