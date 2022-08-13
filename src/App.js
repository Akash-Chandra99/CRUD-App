import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AddPost from "./pages/addPost/AddPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./redux/actions";
import EditPost from "./pages/editPost/EditPost";
import "./App.css";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/editPost/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
