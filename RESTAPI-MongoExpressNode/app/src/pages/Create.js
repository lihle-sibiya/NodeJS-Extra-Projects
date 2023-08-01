//Create new post
await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        author, title, tags: tags.split(","), body
    })
}).then(resp => resp.json());

//Update
await fetch(`${baseUrl}/posts/comment/${params.id}`, {
    method: "PATCH",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        author, body
    })
});

//DELETE
await fetch(`${baseUrl}/posts/${params.id}`, {
    method: "DELETE"
});