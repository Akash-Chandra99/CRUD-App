import React from "react";
import { addPost } from "../../redux/actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function AddPost() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addPost({ title: data.title, body: data.body }));
    navigate("/");
  };
  console.log(errors);

  return (
    <div className="formInput">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5">Add Post</Typography>
        <textarea
          // defaultValue={title ? title : ""}
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <Typography variant="p" sx={{ color: "red", mt: 1 }}>
            This field is required
          </Typography>
        )}
        <textarea
          // defaultValue={body ? body : ""}
          type="text"
          placeholder="Body"
          {...register("body", { required: true })}
        />
        {errors.body && (
          <Typography variant="p" sx={{ color: "red", mt: 1 }}>
            This field is required
          </Typography>
        )}

        {/* <button type="submit">Add</button>
        <button onClick={() => navigate("/")}>cancel</button> */}
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/")}
          >
            cancel
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default AddPost;
