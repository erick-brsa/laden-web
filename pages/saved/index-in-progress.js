import { ShoppingLayout } from '../../components/layouts'
import { Banner } from '../../components/ui';

const SavedProductsPage = () => {
    return (
        <ShoppingLayout
            title="Laden - Lista de deseos"
            description="Lista de deseos"
        >
            <Banner 
                image={`https://images.unsplash.com/photo-1560837616-fee1f3d8753a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
                title="Lista de deseos"
            />
            <main>
                <section className='container section'>
                    
                </section>
            </main>
        </ShoppingLayout>
    )
}

export default SavedProductsPage;