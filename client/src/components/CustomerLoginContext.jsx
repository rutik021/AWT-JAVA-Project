import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerLoginContext = createContext();

export const useCustomerLogin = () => useContext(CustomerLoginContext);

export const CustomerLoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const customerLogin = () => setIsLoggedIn(true);
    const logout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <CustomerLoginContext.Provider value={{ isLoggedIn, customerLogin, logout }}>
            {children}
        </CustomerLoginContext.Provider>
    );
};
