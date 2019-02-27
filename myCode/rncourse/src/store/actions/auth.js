import { AsyncStorage } from 'react-native';
import { TRY_AUTH, AUTH_SET_TOKEN } from './actionTypes';
import { authApiKey } from '../../projectApiKeys';
import { uiStartLoading, uiStopLoading } from './index';
import startMainTabs from '../../screens/MainTabs/startMainTabs';

 export const tryAuth = (authData,authMode) => {
	return dispatch => {
		let url;
		dispatch(uiStartLoading());
		if(authMode === "signup") {
			url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${authApiKey}`;
		} else {
			url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${authApiKey}`;
		}
		fetch(url,{
			method: 'POST',
			body: JSON.stringify({
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.catch(err => {
			console.log(err);
			alert("Authentication failed, please try again!");
			dispatch(uiStopLoading());
		})
		.then((res) => res.json())
		.then(parsedRes => {
			dispatch(uiStopLoading());
			if(!parsedRes.idToken){
				alert("Authentication failed, please try again!");
			} else {
				dispatch(authStoreToken(parsedRes.idToken));
				startMainTabs();
			}
		});
	};
};

export const authStoreToken = token => {
	return dispatch => {
		dispatch(authSetToken(token));
		AsyncStorage.setItem("ap:auth:token",token);
	};
};

export const authSetToken = token => {
	return {
		type: AUTH_SET_TOKEN,
		token
	};
};

export const authGetToken = () => {
	return (dispatch,getState) => {
		const promise = new Promise((resolve,reject) => {
			const token = getState().auth.token;
			if(!token){
				AsyncStorage.getItem("ap:auth:token")
				.catch(err => {
					reject();
				})
				.then(tokenFromStorage => {
					if(!tokenFromStorage){
						reject();
					} else {
						dispatch(authSetToken(tokenFromStorage));
						resolve(tokenFromStorage);
					}
				})
			} else {
				resolve(token);
			}
		});
		return promise;
	};
};

export const authAutoSignIn = () => {
	return dispatch => {
		dispatch(authGetToken())
			.then(token => {
				startMainTabs();
			})
			.catch(err => console.log("Failed to Login"));
	};
};