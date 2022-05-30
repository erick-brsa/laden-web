const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const newPhone = cleaned.slice(0, 2)+ '-' + cleaned.slice(2, 6) + '-' + cleaned.slice(6, 10)
    return newPhone;
}

console.log(formatPhoneNumber(5548626042));