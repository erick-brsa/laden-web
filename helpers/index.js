import Router from 'next/router';

export const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Date(date).toLocaleDateString('es-MX', options)
}

export const formatCurrency = (value) => {
    const options = {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }
    return new Intl.NumberFormat('es-MX', options).format(value)
}

export const forceReload = () => {
    Router.reload()
}
