let api_url;

if(process.env.NODE_ENV === "production"){
	api_url  = process.env.REACT_APP_API_URL;
} else{
	api_url = "http://localhost:5000"
}

export default api_url;