import { convertFromRaw } from "draft-js";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
} from "@mui/material";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";



export default function BlogCard({ blog }) {
    const previewText = (editorState) => {
        return convertFromRaw(editorState).getFirstBlock().getText();
    };
    return (
        <Card
            sx={{
                maxWidth: 600,
                mx: "auto",
                my: 2,
                "&:hover": {
                    transition: "all 300ms ease-in-out",
                    boxShadow: "2px 2px 10px #00000070"
                },
            }}
        >
            <CardHeader
                component={Link}
                to="/profile"
                avatar={
                    <Avatar aria-label="Author" image="s" alt="A">
                        A
                    </Avatar>
                }
                title={<Typography variant="body1">Arjun Singh Lubana</Typography>}
                subheader="September 14, 2016"
            />
            <Link to={`/blog/${blog.id}`}>
                <CardMedia component="img" image={blog.cover} alt={blog.cover} />

                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {previewText(blog.title)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {previewText(blog.body)}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <IoHeartOutline />
                </IconButton>
                <IconButton aria-label="share">
                    <IoShareSocialOutline />
                </IconButton>
            </CardActions>
        </Card>
    );
}
