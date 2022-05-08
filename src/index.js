import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "App";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain={process.env.REACT_APP_AUTH0_DOMAIN}
				clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
				redirectUri={window.location.origin}
				audience={process.env.REACT_APP_AUTH0_AUDIENCE}
			>
				<QueryClientProvider client={queryClient}>
					<CssBaseline />
					<App />
				</QueryClientProvider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
