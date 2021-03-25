let entryCollection = [];

export const useEntryCollection = () => {
    return [...entryCollection]
}

export const getEntries = () => {
    return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        entryCollection = parsedResponse
        return parsedResponse;
    })
}

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