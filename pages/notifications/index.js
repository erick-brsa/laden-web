import { useState } from "react";
import { getSession } from "next-auth/react";
import { Notification } from "../../components/ui";
import { ShoppingLayout } from "../../components/layouts";
import { getUserById } from "../../database";

import styles from "../../styles/modules/Notifications.module.css";

const NotificationsPage = ({notifications}) => {

    const [notificationsList, setNotificationsList] = useState(notifications || []);

    return (
        <ShoppingLayout
            title="Laden - Notificaciones"
            description="Página de notificaciones"
        >
            <main>
                <section className="container section">
                    <h3 className="section__title">
                        {notificationsList.length === 0 ? "No tienes notificaciones" : "Tus notificaciones"}
                    </h3>
                    <div className={styles["notification-container"]}>
                        {notificationsList.map((notification) => (
                            <Notification 
                                key={notification.id}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </ShoppingLayout>
    )
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) return {
        redirect: {
            destination: "/auth/login",
            permanent: false
        }
    }

    const user = await getUserById(session.user.id);
    // const notifications = await getNotifications(user.id);

    return {
        props: {
            user, 
            // notifications
        }
    }
}

export default NotificationsPage