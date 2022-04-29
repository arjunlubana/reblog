import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import App from "App";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<CssBaseline />
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
