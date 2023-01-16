import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useSearch} from "../hooks/useSearch";

export const Search = () => {
    const [search, handleSearch] = useSearch();
    return (
        <div>
            <form>
                <label htmlFor="search">
                    Filter by keywords
                </label><br/>
                <SearchOutlinedIcon className="glass"/>
                <input onChange={(e) => handleSearch(e)}/>

            </form>
        </div>
    )
}