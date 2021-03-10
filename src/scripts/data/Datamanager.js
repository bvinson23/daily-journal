export const getEntries = () => {
    return fetch("http://localhost:8088/posts")
    .then(response => response.json())
}