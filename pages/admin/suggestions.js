import { AdminLayout } from '../../components/layouts/AdminLayout';
import ShoppingLayout from '../../components/layouts/ShoppingLayout';
import { getSuggestions } from '../../database';

const AdminSuggestionsPage = ({ suggestions }) => {
	/*
	* TOOO: 
	* - Reemplazar el ShoppingLayout por el layout del administrador 
	* - Implementar el componente de sugerencias 
	*/
	 return (
		<ShoppingLayout
			title='Admnistrador - Sugerencias'
		>
			<h1 className='text-center'>Sugerencias de los usuarios</h1>
			<div className='container'>
				{suggestions.map(suggestion => (
					<div key={suggestion.id}>
						<p>
							<strong>{suggestion.title}</strong>
						</p>
						<p>{suggestion.message}</p>
						<button
							onClick={() => alert('Se eliminó la sugerencia')}
						>Eliminar</button>
					</div>
				))}
			</div>
		</ShoppingLayout>
	)
}

export const getServerSideProps = async (ctx) => {
	const suggestions = await getSuggestions();
	return { props: { suggestions: JSON.parse(JSON.stringify(suggestions)) }}
}

export default AdminSuggestionsPage;