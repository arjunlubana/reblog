import { convertFromRaw } from "draft-js";
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

import { StyledLink } from "components";

export default function BlogCard({blog}) {
    const previewText = (editorState) => {
        return convertFromRaw(editorState).getFirstBlock().getText();
    };
    return (
        <Card sx={{ maxWidth: 600, mx: "auto", my: 1 }}>
            <CardHeader
                component={StyledLink}
                to="/profile"
                avatar={
                    <Avatar aria-label="Author" image="s" alt="A">
                    A
                    </Avatar>
                }
                title="Arjun Singh Lubana"
                subheader="September 14, 2016"
            />
            <StyledLink to={`/blog/${blog.id}`}>
                <CardMedia component="img" image="cover-image.jpg" alt="" />

                <CardContent>
                <Typography variant="h6" color="text.secondary">
                        {previewText(blog.title)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {previewText(blog.body)}
                    </Typography>
                </CardContent>
            </StyledLink>
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
