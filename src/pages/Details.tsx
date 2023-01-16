import {Card, CardActions, CardMedia, Container, Typography} from "@mui/material";
import {useParams} from "react-router";
import {useDetails} from "../hooks/useDetails";
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Details = () => {
    const {id} = useParams();
    // @ts-ignore
    const article = useDetails(id);
    return (
        <>{article && (
            <Card
                className="single-card"
            >
                <CardMedia
                    component="img"
                    alt="img"
                    height="245"
                    image={article.imageUrl}
                />
                <Container
                    maxWidth={false}
                    className="single-card-body"
                >
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="single-card-title"
                    >
                        {article.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        className="single-card-text"
                    >
                        {article.summary}
                    </Typography>
                </Container>
                <CardActions>
                    <Link
                        to={`/`}
                        className="link single-link"
                    >
                        <ArrowBackIcon
                            sx={{height: 5.55, width: 12, marginRight: 6 / 8, marginBottom: 2 / 8}}
                        />
                        Back to home page
                    </Link>
                </CardActions>
            </Card>
        )
        }
        </>
    )
}