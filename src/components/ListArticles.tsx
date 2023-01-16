import {Grid} from "@mui/material";
import {useArticles} from "../hooks/useArticles";
import {Article} from "./Article";
import {INews} from "../../types/article";

export const ListArticles = () => {
    const art = useArticles();
    return (
        <>
            {!art.length && <h2>...loading</h2>}
            {art.length
                &&
                art.map((article: INews) => {
                    const articleInfo = {
                        id: article.id,
                        image: article.imageUrl,
                        date: (new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }).format(new Date(article.publishedAt))),
                        title: article.title,
                        describe: article.summary
                    }
                    return (
                        <Grid
                            item
                            borderRadius={5}
                            key={article.id}
                        >
                            <Article
                                {...articleInfo}
                            />
                        </Grid>

                    )
                })

            }
        </>
    )
}