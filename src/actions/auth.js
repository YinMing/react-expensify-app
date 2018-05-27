import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = (uid)=>({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    //async action
    return ()=>{
        //use google popup to login
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = ()=>({
    type: 'LOGOUT'
});

export const startLogout = () => {
    //async action
    return () => {
        //use google popup to logout
        return firebase.auth().signOut();
    };
};