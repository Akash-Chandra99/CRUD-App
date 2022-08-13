import * as types from "./actionsType";

const initiaStore = {
  posts: [],
  post: {},
  loading: true,
};

const deleteItem = (itemList, id) => {
  return itemList.filter((item) => item.id !== id);
};
const addNewItem = (itemList, itemToAdd) => {
  itemList.push(itemToAdd);
  return itemList;
};
export const updateItemDetails = (item_list, itemToUpdate, id) => {
  const updatedUsers = item_list.map((list) => {
    if (list.id === parseInt(id)) {
      list.title = itemToUpdate.title;
      list.body = itemToUpdate.body;
    }

    return list;
  });
  return updatedUsers;
};

const postReducers = (state = initiaStore, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.ADD_POST:
      return {
        ...state,
        posts: addNewItem(state.posts, action.payload),
        loading: false,
      };
    case types.UPDATE_POST:
      return {
        ...state,
        posts: updateItemDetails(
          state.posts,
          action.payload.post,
          action.payload.id
        ),
        loading: false,
      };
    case types.DELETE_POST:
      return {
        ...state,
        posts: deleteItem(state.posts, action.payload),
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducers;
