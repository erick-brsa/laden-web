import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Notification } from "../../components/ui";

import styles from "../../styles/modules/Notifications.module.css";

const NotificationsAdmin = () => {
	return (
		<AdminLayout>
			<div className={styles["container__page"]}>
				<main>
					<section className="container section">
						<h3 className="section__title">Notificaciones</h3>
						<div className={styles["notification-container"]}>
							<Notification />
							<Notification />
							<Notification />
						</div>
					</section>
				</main>
			</div>
		</AdminLayout>
	);
};

export default NotificationsAdmin;
