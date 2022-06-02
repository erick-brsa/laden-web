/* eslint-disable @next/next/no-img-element */
import { getSession, useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ShoppingLayout } from '/components/layouts';
import { Banner } from '/components/ui/pretty';
import { getUserById } from '/database/dbUsers';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { formatPhoneNumber } from '../../helpers';
import axios from 'axios';

import styles from './Account.module.css';

const AccountPage = ({ user }) => {

	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [phone, setPhone] = useState(user.phoneNumber);
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
	const [image, setImage] = useState(user.image);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [editEnabled, setEditEnabled] = useState(false);

	const router = useRouter();

	useEffect(() => {
		if (phone.length === 0) {
			setPhone('')
		}
		setPhone(formatPhoneNumber(phone));
	}, [phone])

	const handleUpdate = async (e) => {
		e.preventDefault();
		if (name.length < 2) {
			setError(true);
			setErrorMessage('El nombre debe de ser de 2 caracteres');
			return;
		}
		if (phone.length > 0) {
			if (phone.length < 10) {
				setError(true);
				setErrorMessage('El numero debe de ser de 10 caracteres');
				return;
			}
		}
		if (password.length < 6) {
			setError(true);
			setErrorMessage('La contraseña debe de ser de 6 caracteres');
			return;
		}
		if (password !== passwordConfirm) {
			setError(true);
			setErrorMessage('Las contraseñas no coinciden');
			return;
		}
		setError(false);
		setErrorMessage('');
		setEditEnabled(false);

		if (password === passwordConfirm) {
			axios.put('/api/user/register', {
				name,
				email,
				phone,
				password,
				image,
				password,
				id: user.id
			})
			// router.push('/account');
			router.reload();
		}
	}

	return (
		<ShoppingLayout
			title="Laden - Mi cuenta"
			description="Página de mi cuenta"
		>
			<Banner
				image={`https://images.unsplash.com/photo-1561704061-138b11686db5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470`}
			/>
			<main>
				<section className="container section">
					<div className={styles["account-container"]}>
						<div className={styles["account"]}>
							<div className={styles["account__image"]}>
								<img
									src={image}
									alt={user.name}
									className={styles["account__image__avatar"]}
								/>
							</div>
							<div className={styles["account__info"]}>
								<form
									className={styles["formulario"]}
									method="post"
								>
									{error && (
										<div className={styles["formulario__error"]}>
											{errorMessage}
										</div>
									)}
									<div className={styles["formulario__grupo"]}>
										<div className={styles["formulario__grupo-input"]}>
											<input
												type="text"
												className={styles["formulario__input"]}
												name="name"
												id="name"
												placeholder=" "
												value={name}
												onChange={(e) => setName(e.target.value)}
												disabled={!editEnabled}
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
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												disabled
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
												value={phone === '00-0000-0000' ? '' : phone}
												disabled={!editEnabled}
												onChange={(e) => setPhone(e.target.value)}
											/>
											<label htmlFor="tel" className={styles["formulario__label"]}>Teléfono</label>
										</div>
										{/* <p className={styles["formulario__input-error"]}>
											El correo no es válido.
										</p> */}
									</div>
									{editEnabled && (
										<>
											<div className={styles["formulario__grupo"]}>
												<div className={styles["formulario__grupo-input"]}>
													<input
														type={showPassword ? 'text' : 'password'}
														className={styles["formulario__input"]}
														name="password"
														id="password"
														placeholder=" "
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>
													<label htmlFor="email" className={styles["formulario__label"]}>Contraseña</label>
													<span className={styles["formulario__icon-password"]}>
														{showPassword ? (
															<EyeIcon
																onClick={() => setShowPassword(!showPassword)}
																width="1.4rem"
																height="1.4rem"
															/>
														) : (

															<EyeOffIcon
																onClick={() => setShowPassword(!showPassword)}
																width="1.4rem"
																height="1.4rem"
															/>
														)}
													</span>
												</div>
												{/* <p className={styles["formulario__input-error"]}>
											El correo no es válido.
										</p> */}
											</div>
											<div className={styles["formulario__grupo"]}>
												<div className={styles["formulario__grupo-input"]}>
													<input
														type={showPasswordConfirm ? 'text' : 'password'}
														className={styles["formulario__input"]}
														name="passwordConfirm"
														id="passwordConfirm"
														placeholder=" "
														value={passwordConfirm}
														onChange={(e) => setPasswordConfirm(e.target.value)}
													/>
													<label htmlFor="email" className={styles["formulario__label"]}>Confirmar contraseña</label>
													<span className={styles["formulario__icon-password"]}>
														{showPasswordConfirm ? (
															<EyeIcon
																onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
																width="1.4rem"
																height="1.4rem"
															/>
														) : (

															<EyeOffIcon
																onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
																width="1.4rem"
																height="1.4rem"
															/>
														)}
													</span>
												</div>
												{/* <p className={styles["formulario__input-error"]}>
											El correo no es válido.
										</p> */}
											</div>
										</>
									)}
									<div className={styles["account__buttons"]}>
										<button
											onClick={() => signOut()}
											className={styles["account__signout"]}
										>
											Cerrar sesión
										</button>
										{
											editEnabled ? (
												<button
													type="button"
													onClick={handleUpdate}
													className={styles["account__signout"]}
												>
													Guardar cambios
												</button>
											) : (
												<button
													type="button"
													onClick={() => setEditEnabled(true)}
													className={styles["account__signout"]}
												>
													Editar cuenta
												</button>
											)
										}
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
			user
		}
	}
}


export default AccountPage