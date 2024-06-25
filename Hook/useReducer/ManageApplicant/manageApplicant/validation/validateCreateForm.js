
export const checkValidFirstName = (firstName) => {
    return firstName.trim() === '' ? 'First Name can not empty !' : true
}

export const checkValidLastName = (lastName) => {
    return lastName.trim() === '' ? 'Last Name can not empty !' : true
}

export const checkValidEmail = (email) => {
    if (email.trim() === '') {
        return 'Email can not empty !'
    }

    if (!email.includes('@')) {
        return 'Email must include @ character !'
    }

    return true
}

export const checkValidPhone = (phone) => {
    return phone.trim() === '' ? 'Phone can not empty !' : (phone.trim().length === 10 ? true : 'Phone must have 10 numbers !')
}

