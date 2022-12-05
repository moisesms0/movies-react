import { useLocation } from "react-router-dom";
import { Genre } from "./Genre";






export function GenreSearch() {
    const query = new URLSearchParams(useLocation().search);
    const genreid = query.get('genreid')
    const name = query.get('name')




    return (
        <div>
            <Genre key={genreid} search={genreid} name={name}  />
        </div>
    )
}
