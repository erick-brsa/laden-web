/* eslint-disable @next/next/no-img-element */
import { getSession, useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingLayout } from '/components/layouts';
import { Banner } from '/components/ui/pretty';
import { getUserById } from '/database/dbUsers';

import styles from './Account.module.css';

const AccountPage = ({ user }) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [image, setImage] = useState('');



	return (
		<ShoppingLayout
			title="Laden - Mi cuenta"
			description="Página de mi cuenta"
		>
			<Banner
				image={`https://images.unsplash.com/photo-1561704061-138b11686db5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470`}
			// title="Mi cuenta"
			/>
			<main>
				<section className="container section">
					<div className={styles["account-container"]}>
						<div className={styles["account"]}>
							<div className={styles["account__image"]}>
								<img
									src={user.image}
									alt={user.name}
									className={styles["account__image__avatar"]}
								/>
							</div>
							<div className={styles["account__info"]}>
								{/* <h2 className={styles["account__name"]}>{user.name}</h2>
								<h4 className={styles["account__email"]}>{user.email}</h4> */}

								<form className={styles["formulario"]}>
									<div className={styles["formulario__grupo"]}>
										<div className={styles["formulario__grupo-input"]}>
											<input
												type="email"
												className={styles["formulario__input"]}
												name="name"
												id="name"
												placeholder=" "
												value={user.name}
											/>
											<label htmlFor="name" className={styles["formulario__label"]}>
												{user.role === 'vendedor' ? 'Razón social' : 'Nombre'}
											</label>
										</div>
									</div>
									<div className={styles["formulario__grupo"]}>
										<div className={styles["formulario__grupo-input"]}>
											<input
												type="email"
												className={styles["formulario__input"]}
												name="email"
												id="email"
												placeholder=" "
												value={user.email}
											/>
											<label htmlFor="email" className={styles["formulario__label"]}>Correo electronico</label>
										</div>
										{/* <p className={styles["formulario__input-error"]}>
											El correo no es válido.
										</p> */}
									</div>
									<div className={styles["formulario__grupo"]}>
										<div className={styles["formulario__grupo-input"]}>
											<input
												type="tel"
												className={styles["formulario__input"]}
												name="tel"
												id="tel"
												placeholder=" "
												// value={}
											/>
											<label htmlFor="tel" className={styles["formulario__label"]}>Teléfono</label>
										</div>
										{/* <p className={styles["formulario__input-error"]}>
											El correo no es válido.
										</p> */}
									</div>
									<div className={styles["formulario__grupo"]}>
										<div className={styles["formulario__grupo-input"]}>
											<input
												type="password"
												className={styles["formulario__input"]}
												name="password"
												id="password"
												placeholder=" "
											/>
											<label htmlFor="email" className={styles["formulario__label"]}>Contraseña</label>
										</div>
										{/* <p className={styles["formulario__input-error"]}>
											El correo no es válido.
										</p> */}
									</div>
									<div className={styles["formulario__grupo"]}>
										<div className={styles["formulario__grupo-input"]}>
											<input
												type="password"
												className={styles["formulario__input"]}
												name="password"
												id="password"
												placeholder=" "
											/>
											<label htmlFor="email" className={styles["formulario__label"]}>Confirmar contraseña</label>
										</div>
										{/* <p className={styles["formulario__input-error"]}>
											El correo no es válido.
										</p> */}
									</div>
								<div className={styles["account__buttons"]}>
									<button
										onClick={() => signOut()}
										className={styles["account__signout"]}
									>
										Cerrar sesión
									</button>
									<button
										// onClick={() => signOut()}
										className={styles["account__signout"]}
									>
										Editar cuenta
									</button>
									{user.role === 'vendedor' ? (
										<Link href="/seller">
											<a
												className={styles["account__signout"]}
											>
												Administra tus productos
											</a>
										</Link>

									) : (
										<Link href="/auth/register_seller">
											<a
												className={styles["account__signout"]}
											>
												Hazte vendedor
											</a>
										</Link>

									)}
								</div>
								</form>

							</div>
						</div>
					</div>
				</section>
			</main>
		</ShoppingLayout>
	)
}

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) return {
		redirect: {
			destination: "/auth/login",
			permanent: false
		}
	}

	const user = await getUserById(session.user.id)

	return {
		props: {
			session,
			user
		}
	}
}


export default AccountPage