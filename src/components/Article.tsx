import {
    Card,
    CardMedia,
    Typography,
    CardContent,
} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Link} from "react-router-dom";
import {FC} from "react";

interface CardProps {
    date: string,
    id: number,
    image: string,
    title: string,
    describe: string
}

export const Article: FC<CardProps> = ({date, id, image, title, describe}) => {
    return (
        <Card
            sx={{width: 400, height: 530}}
            className="shadow"
        >
            <CardMedia
                component="img"
                height="217"
                image={image}
                alt="poster"
            />
            <CardContent
                sx={{padding: 3.125, marginBottom: 20 / 8}}
            >
                <Typography
                    gutterBottom
                    component="div"
                    className="veryLightTitle"
                    sx={{marginBottom: 24 / 8}}
                >
                    <CalendarTodayIcon
                        sx={{fontSize: 12, marginRight: 9.33 / 8}}

                    />{date}
                </Typography>
                <Typography
                    component="h3"
                    sx={{marginBottom: 20 / 8}}
                    width={350}
                    height={58}
                    className="titleText"
                    data-text={id}
                    dangerouslySetInnerHTML={{__html: title}}
                >
                </Typography>
                <Typography
                    component="p"
                    className="cardText"
                    width={350}
                    height={96}
                    sx={{marginBottom: 20 / 8}}
                    dangerouslySetInnerHTML={{__html: describe}}
                >
                </Typography>
                <Link
                    to={`/${id}`}
                    className="link"
                >
                    Read more
                    <ArrowRightAltIcon
                        sx={{height: 5.55, width: 12, marginTop: 20 / 8}}
                    />
                </Link>
            </CardContent>
        </Card>
    )
}