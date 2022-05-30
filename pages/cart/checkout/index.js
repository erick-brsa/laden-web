import styles from "../../../styles/modules/Pago.module.css";
import { ShoppingLayout } from "../../../components/layouts/ShoppingLayout";

const PaymentPage = () => {
	return (
		<ShoppingLayout>
			<div className="container">
				<h2 className={styles["title__page"]}>Pagar</h2>
				<div className={styles["container__page-pago"]}>
					<div className={styles["container__pago"]}>
						<div className={styles["container__pago-tarjeta"]}>
							<div className={styles["pago__tarjeta"]}>
								<div className={styles["container__data"]}>
									<span className={styles["metodo__pago"]}>
										<input
											className={styles["select__metodo"]}
											type="checkbox"
										></input>
										<img
											className={styles["container__img-pago"]}
											src="https://www.udemy.com/staticx/udemy/images/v9/card-default.svg"
										/>
										Tarjeta de crédito/débito
									</span>
									<span className={styles["pagos"]}>
										<img
											className={styles["container__img-pago"]}
											src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
										/>
										<img
											className={styles["container__img-pago"]}
											src="https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
										/>
										<img
											className={styles["container__img-pago"]}
											src="https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
										/>
									</span>
								</div>

								<div className={styles["accordion"]}>
									<div className={styles["container__form"]}>
										<p className={styles["title__credit"]}>
											Nombre del titular
										</p>
										<input
											className={styles["credit__inputs"]}
											type="text"
											placeholder="Nombre del titular"
										/>
										<p className={styles["title__credit"]}>Numero de tarjeta</p>
										<input
											className={styles["credit__inputs"]}
											type="text"
											placeholder="0000 0000 0000 0000"
											maxLength="16"
											minLength="16"
										/>
										<div className={styles["container__private-info"]}>
											<div className={styles["content"]}>
												<p className={styles["title__credit"]}>CVC</p>
												<input
													className={styles["credit__inputs"]}
													type="text"
													placeholder="CVC"
												/>
											</div>
											<div className={styles["content"]}>
												<p className={styles["title__credit"]}>
													Fecha de vencimiento
												</p>
												<input
													className={styles["credit__inputs"]}
													type="text"
													placeholder="MM/AA"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles["container__pago-paypal"]}>
							<div className={styles["pago__tarjeta"]}>
								<div className={styles["container__data"]}>
									<span className={styles["metodo__pago"]}>
										<input
											className={styles["select__metodo"]}
											type="checkbox"
										></input>
										<img
											className={styles["container__img-pago"]}
											src="https://www.udemy.com/staticx/udemy/images/v9/hpp-paypal.svg"
										></img>
										Tarjeta de crédito/débito
									</span>
								</div>

								<div className="accordion">
									<p>
										Para completar la transacción, te enviaremos a los
										servidores seguros de PayPal.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className={styles["container__pedido"]}>
						<div className={styles["container__pedido-info"]}>
							<h4>Resumen</h4>
							<div className={styles["precio"]}>
								<p>Precio Original: </p>
								<p>1,090MX$</p>
							</div>

							<hr />

							<div className={styles["total"]}>
								<p>Total :</p>
								<p>1,090MX$</p>
							</div>

							<div className={styles["button__pagar"]}>
								<button className={styles["pagar"]}>Completar pago</button>
							</div>

							<p className={styles["condiciones"]}>
								Al completar la compra, aceptas estas Condiciones de uso.
								<br />
								Udemy está obligado por ley a recaudar los impuestos sobre las
								transacciones de las compras realizadas en determinadas
								jurisdicciones fiscales.
							</p>
						</div>
					</div>
				</div>
			</div>
		</ShoppingLayout>
	);
};

export default PaymentPage;
