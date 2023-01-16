import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {allArticles, loadArticles, selectSearch, setClear, setHighlight} from "../store/articles-slice";

export const useArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(allArticles);
    const valueInput = useSelector(selectSearch);
    useEffect(() => {
        if (articles.length === 0 ) {
            // @ts-ignore
            dispatch(loadArticles());
        }
    },[articles,dispatch,valueInput]);
    useEffect(() => {
        // @ts-ignore
        dispatch(setClear());
        // @ts-ignore
        dispatch(setHighlight());
        // @ts-ignore

    }, [dispatch, valueInput])
    return articles;
}