

function isValidate(string) {
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(string)) {
        return 'Phải nhập 1 ký tự in hoa...';
    }
    
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(string)) {
        return 'Phải nhập 1 ký tự in thường...';
    }
    
    // Check for at least one digit
    if (!/\d/.test(string)) {
        return 'Phải chứa 1 ký tự số...';
    }
    
    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(string)) {
        return 'Phải chứa 1 ký tự đặc biệt...';
    }
    
    // Check for minimum length of 8 characters
    if (string.length < 8) {
        return 'Phải đủ 8 ký tự...';
    }
    
    return true;
}

export default isValidate;
