export const tokenKey = "token";
export const userKey = "user";

export function saveToken(token) {
	saveToStorage(tokenKey, token);
}

export function getToken() {
	return getFromStorage(tokenKey);
}

export function saveUser(user) {
	saveToStorage(userKey, user);
}

export function getUsername() {
	const user = getFromStorage(userKey);

	if (user) {
		return user.username;
	}

	return null;
}

export function clearStorage() {
	localStorage.removeItem("user");
	localStorage.removeItem("token");
	window.location.reload(false);
}

function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
	const value = localStorage.getItem(key);

	if (!value) {
		return null;
	}

	return JSON.parse(value);
}