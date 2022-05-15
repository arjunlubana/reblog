import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "App";

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      light: "#ead6db",
      main: "#332c62",
    },
    secondary: {
      light: "#4c4b7e",
      main: "#837498",
      dark: "#4c4b7e"
    }
  }
})

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
          <ThemeProvider theme={theme}>
					<App />
          </ThemeProvider>
				</QueryClientProvider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
