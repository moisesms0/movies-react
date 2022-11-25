import { MoviesGrid } from "../components/MoviesGrid/MoviesGrid";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {

    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 400);
  return (
    <div style={{paddingTop:"80px"}}>
 
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
