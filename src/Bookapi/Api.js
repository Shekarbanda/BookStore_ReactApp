export default async function getbooks(){
    const books = 'https://www.dbooks.org/api/recent';
    const data = await fetch(books);
    return await data.json();
}

