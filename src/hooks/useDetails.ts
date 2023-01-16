import {useDispatch, useSelector} from "react-redux";
import {loadArticleById, selectArticle} from "../store/details-slice";
import {useEffect} from "react";

export const useDetails = (id:number|string) => {
    const dispatch = useDispatch();
    const article = useSelector(selectArticle);
    useEffect(() => {
        // @ts-ignore
        dispatch(loadArticleById(id))
    },[dispatch, id])
    return article;
}