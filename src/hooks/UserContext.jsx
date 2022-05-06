import { useReducer, useEffect, createContext } from "react";
import { useAuthApi } from "hooks";

export const UserContext = createContext();

function reducer(state, action) {
	switch (action.type) {
		case "setUserData":
			return { data: action.payload, loading: false, error: null };
		case "setError":
			return { data: null, loading: false, error: action.payload };
		default:
			throw new Error();
	}
}

export function UserProvider({ children }) {
	const { sendRequest } = useAuthApi();
	const [state, dispatch] = useReducer(reducer, {
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		sendRequest().then((data) => {
			console.log(data)
			dispatch({ type: "setUserData", payload: data });
		});
	}, [sendRequest]);
	return (
		<UserContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
}
