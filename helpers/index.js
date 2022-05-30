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

export const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const newPhone = cleaned.slice(0, 2)+ '-' + cleaned.slice(2, 6) + '-' + cleaned.slice(6, 10)
    return newPhone;
}

export const forceReload = () => {
    Router.reload()
}
