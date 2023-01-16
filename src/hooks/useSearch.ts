import {useDispatch, useSelector} from "react-redux";
import {selectSearch, setSearch} from "../store/articles-slice";

export const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);
    // @ts-ignore
    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value))
    }
    return [search, handleSearch ]
}