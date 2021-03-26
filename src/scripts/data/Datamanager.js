//global variables
let entryCollection = [];

//function to allow using the entryCollection
export const useEntryCollection = () => {
    return [...entryCollection]
}

//fetch call to get all the entries
export const getEntries = () => {
    return fetch("http://localhost:8088/posts")
        .then(response => response.json())
        .then(parsedResponse => {
            entryCollection = parsedResponse
            return parsedResponse;
        })
}

//fetch call to create a new post
export const createPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)

    })
        .then(response => response.json())
}

  export const getSinglePost = (postId) => {
      return fetch(`http://localhost:8088/posts/${postId}`)
      .then(response => response.json())
  }

  export const updatePost = postObj => {
      return fetch(`http://localhost:8088/posts/${postObj.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(postObj)
      })
      .then(response => response.json())
      .then(getEntries())
  }

//fetch call to delete a post
export const deletePost = postId => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }

    })
        .then(response => response.json())
        .then(getEntries)
}