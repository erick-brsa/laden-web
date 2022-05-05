import Link from "next/link"
import ShoppingLayout from "../components/layouts/ShoppingLayout"

const Custom404 = () => {
  return (
    <ShoppingLayout
        title="Página no encontrada"
        description="Página no encontrada"
    >
        <div className="container flex flex-col flex-strech justify-center">
            <div>
                <h1 className="text-center">404</h1>
                <Link href="/"> 
                    <a className="text-color-primary">
                        Volver a la página principal
                    </a>
                </Link>
            </div>
        </div>
    </ShoppingLayout>
  )
}

export default Custom404