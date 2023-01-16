import {Divider} from "@mui/material";
import {useSelector} from "react-redux";
import {getCounter} from "../store/articles-slice";

export const Counter = () => {
    const counter = useSelector(getCounter);
    return (
        <div className="counter">
            <p>Results : {counter}</p>
            <Divider/>
        </div>
    )
}