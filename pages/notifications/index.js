import { ShoppingLayout } from "../../components/layouts";
import { Notification } from "../../components/ui";

import styles from "../../styles/modules/Notifications.module.css";

const NotificationsPage = () => {
    return (
        <ShoppingLayout
            title="Laden - Notificaciones"
            description="Página de notificaciones"
        >
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
        </ShoppingLayout>
    )
}

export default NotificationsPage