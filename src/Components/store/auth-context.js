import React from "react";

const AuthContext = React.createContext({
    token: '',
    mailId: '',
    isLoggedin: false,
    login: (token, email) => {},
    logout: () => {}
})

export default AuthContext;