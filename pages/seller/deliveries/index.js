import styles from "../../../styles/modules/Seller.module.css";
import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { DeliverSeller } from "./deliver";

const DeliverPage = () => {
	return (
		<SellerLayout
			title="Laden - Entregas"
			description="Entregas del vendedor"
		>
			<div className={styles["container__page"]}>
				<h3>Tus entregas</h3>
				<DeliverSeller></DeliverSeller>
				<DeliverSeller></DeliverSeller>
			</div>
		</SellerLayout>
	);
};

export default DeliverPage;
