import { ShoppingLayout } from '../../components/layouts'
import { ProductCard } from '../../components/products'
import { getAllProducts } from '../../database'

const OffersPage = ({ products }) => {
    return (
        <ShoppingLayout
            title="Laden - Ofertas"
            description="Página de ofertas"
        >
            <main>
                <section className="container section">
                    <h3 className="section__title">Productos en oferta</h3>
                    <div className="products__container">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </section>
            </main>
        </ShoppingLayout>
    )
}

export const getServerSideProps = async (ctx) => {
    // TODO: Crear función para obtener productos en oferta
	const products = await getAllProducts();
	return {
		props: {
			products
		}
	}
}

export default OffersPage