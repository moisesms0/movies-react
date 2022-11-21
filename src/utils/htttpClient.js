export function get(path){
    return fetch("https://api.themoviedb.org/3"+path, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDFiZDVjMzVkYzM0MWNmYjQ3MjhhZGQ3YmI5YTNmNiIsInN1YiI6IjYzNjMxMjAxNDIwMjI4MDA3YzhhNzFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hJLgTfLNWuT31UNAnpgh6sJivZjcUo_3bRSOJLQvdp4",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((result) => result.json())
}