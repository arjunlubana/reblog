import { Avatar } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavAvatar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Avatar src={user.picture} sx={{ outline: "2px solid #ead6db" }} />
    )
  );
}
