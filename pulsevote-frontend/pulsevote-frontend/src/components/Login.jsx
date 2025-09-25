if (!email || !password) {
    setError("Email and password are required.");
    return;
    }

if (!isValidEmail(email)) {
    setError("Invalid email format.");
    return;
    }

if (!isStrongPassword(password)) {
    setError("Password must be at least 8 characters long and include letters and numbers.");
    return;
    }