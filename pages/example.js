import React from 'react'

const user = {
    name: 'John Doe',
    age: 32,
    role: 'ingeniero-soporte'
}

const ExamplePage = () => {
    if (user.role === 'ingeniero-soporte') {
        return (
            <div>
                Inge de soporte
            </div>
        )
    }

    if (user.role === 'ingeniero-desarrollo') {
        return (
            <div>
                Inge de desarrollo
            </div>
        )
    }
}

export default ExamplePage