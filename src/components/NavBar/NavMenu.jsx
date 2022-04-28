import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Badge, MenuItem, Menu } from "@mui/material";
import {
	IoNotificationsOutline,
	IoDocumentTextOutline,
	IoMenu,
	IoPersonCircleOutline,
} from "react-icons/io5";

export default function NavMenu() {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem component={Link} to="/profile">
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<IoPersonCircleOutline />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
			<MenuItem component={Link} to="/drafts">
				<IconButton
					size="large"
					aria-label="show 4 new mails"
					color="inherit"
				>
					<IoDocumentTextOutline />
				</IconButton>
				<p>Drafts</p>
			</MenuItem>
			<MenuItem component={Link} to="/notifications">
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<IoNotificationsOutline />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
		</Menu>
	);

	return (
		<>
			<Box sx={{ display: { xs: "none", md: "flex" } }}>
				<IconButton
					component={Link}
					to="/drafts"
					size="large"
					aria-label="show 4 new mails"
					color="inherit"
				>
					<IoDocumentTextOutline />
				</IconButton>
				<IconButton
					component={Link}
					to="/notifications"
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<IoNotificationsOutline />
					</Badge>
				</IconButton>
				<IconButton
					component={Link}
					to="/profile"
					size="large"
					edge="end"
					aria-label="account of current user"
					color="inherit"
				>
					<IoPersonCircleOutline />
				</IconButton>
			</Box>
			<Box sx={{ display: { xs: "flex", md: "none" } }}>
				<IconButton
					size="large"
					aria-label="show more"
					aria-controls={mobileMenuId}
					aria-haspopup="true"
					onClick={handleMobileMenuOpen}
					color="inherit"
				>
					<IoMenu />
				</IconButton>
			</Box>
			{renderMobileMenu}
		</>
	);
}
