import * as types from "./actionsType";

const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});
const postAdded = (post) => ({
  type: types.ADD_POST,
  payload: post,
});
const postUpdated = (post, id) => ({
  type: types.UPDATE_POST,
  payload: { post: post, id: id },
});
const postDeleted = (id) => ({
  type: types.DELETE_POST,
  payload: id,
});

export const fetchPosts = () => async (dispatch) => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => dispatch(getPosts(posts)))
    .catch((error) => console.log(error));
};

export const addPost = (post) => async (dispatch) => {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 201) {
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => dispatch(postAdded(data)))
    .catch((error) => console.log(error));
};

export const deletePost = (id) => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then(() => dispatch(postDeleted(id)))
    .catch((error) => console.log(error));
};

export const updatePost = (post, id) => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      return dispatch(postUpdated(post, id));
    })
    .catch((error) => console.log(error));
};
