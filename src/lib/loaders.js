export async function fetchFilmData() {
    let answer = await fetch('/src/lib/data/film-data.json');
    let data = await answer.json();
    return data;
}  