import { SupportLayout } from "../../components/layouts";
import { getFaqs } from "../../database/dbFaqs";

const SupportPage = () => {
	return (
		<SupportLayout
			title="Laden - Soporte"
		>

		</SupportLayout>
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
