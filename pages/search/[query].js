import { ShoppingLayout } from '../../components/layouts';
import { ProductCard } from '../../components/products';
import { getProductsByTerm } from '../../database';

import styles from './Search.module.css'

const SearchPage = ({ products, query }) => {
    return (
        <ShoppingLayout>
            <main>
				<section className="container section">
					<h3 className="section__title">
                        Productos encontrados con la búsqueda: {''}
                        <span className={styles["search-query"]}>{query}</span>
                    </h3>
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

export const getServerSideProps = async ({ params }) => {
    const { query = '' } = params;

    if (query.length === 0) {
        return {
            redirect: {
                destination: '/search',
                permanent: false
            }
        }
    }

    const products = await getProductsByTerm(query);

    return {
        props: {
            products,
            query
        }
    }
}

export default SearchPage