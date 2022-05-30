import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { NotificationSeller } from "./NotificationSeller";
import styles from "../../../styles/modules/SellerNotification.module.css"
import { getSession } from "next-auth/react";
import { getUserById } from "../../../database";

const SellerNotification = () => {
	return (
		<SellerLayout
			title="Laden - Notificaciones"
			description="Página de notificaciones"
		>
			<div className={styles["container__page"]}>
				<main>
					<section className="container section">
						<h3 className={styles["section__title"]}>Tus Notificaciones</h3>
						<div className={styles["notification-container"]}>
							<NotificationSeller />
							<NotificationSeller />
							<NotificationSeller />
						</div>
					</section>
				</main>
			</div>
		</SellerLayout>
	);
};

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) return {
		redirect: { destination: "/auth/login", permanent: false }
	}

	const user = await getUserById(session.user.id);
	if (user.role !== "vendedor") return {
		redirect: { destination: "/", permanent: false }
	}

	return {
		props: {

		}
	};
}

export default SellerNotification;
