import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ApiError } from "utils";

/**
 * A custom Hook to fetch user data from Auth0 Management API.
 * @return {function} Function that sends a request to the Auth0 Management API.
 */
const useAuth = () => {
	const { user, getAccessTokenSilently } = useAuth0();

	// Setting the user id (user.sub) as optional if the user is not logged in
	const apiUrl = user
		? `${process.env.REACT_APP_AUTH0_MANAGEMENT_API}users/${user.sub}`
		: null;

	const fetchToken = useCallback(
		/**
		 * This function fetches JWT Tokens from Auth0 Management API.
		 * JWT Tokens are used to make secure API calls to the Auth0 API.
		 * @return {Object} - An Object with the accessToken
		 *                    and an error object if any.
		 */
		async () => {
			try {
				const accessToken = await getAccessTokenSilently();
				return { accessToken, error: null };
			} catch (error) {
				return {
					accessToken: null,
					authError: error,
				};
			}
		},
		[getAccessTokenSilently]
	);

	const request = useCallback(
		/**
		 * Sends a request to the Auth0 API server to:
		 * 1. Get the current User
		 * 2. Update the current User
		 * @param  {string} url          - Api Url to make calls to.
		 * @param  {Object} fetchOptions - Fetch options like method and Headers
		 * @param  {string} accessToken  - Access Token from the fetchToken function.
		 * @return {Object}              - Contains data object and
		 *                                 an error object in case of error
		 */
		async (url, fetchOptions, accessToken) => {
			const res = await fetch(url, {
				...fetchOptions,
				headers: {
					...fetchOptions.headers,
					Authorization: `Bearer ${accessToken}`,
				},
			});
			const result = await res.json();
			if (result.error) {
				return {
					data: null,
					apiError: new ApiError(result),
				};
			} else {
				return {
					data: result,
					apiError: null,
				};
			}
		},
		[]
	);

	const sendRequest = useCallback(
		/**
		 * Chains the fetchToken and request functions together
		 * @param  {Object} fetchOptions - Any additional fetch Options for the request.
		 * @return {Object}              - A data Object on successful request or
		 *                                 an Error object on unsuccessful request.
		 */
		async (fetchOptions = {}) => {
			if (apiUrl) {
				const { accessToken, authError } = await fetchToken();
				if (authError) {
					return authError;
				}
				const { data, apiError } = await request(
					apiUrl,
					fetchOptions,
					accessToken
				);
				if (apiError) {
					return apiError;
				}
				console.log(apiError, data, authError)
				return data;
			}
		},

		[apiUrl, fetchToken, request]
	);

	return {
		sendRequest,
	};
};

export default useAuthApi;
