import {Search} from "../components/Search";
import {ListArticles} from "../components/ListArticles";
import {Container, Grid} from "@mui/material";
import {Counter} from "../components/Counter";

export const Home = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{paddingTop: 6.25, m: 0, paddingX: 9.375}}>
            <Grid>
                <Search/>
                <Counter/>
            </Grid>
            <Grid
                container
                spacing={45 / 8}
                sx={{paddingTop: 45 / 8}}
            >
                <ListArticles/>
            </Grid>
        </Container>
    )
}