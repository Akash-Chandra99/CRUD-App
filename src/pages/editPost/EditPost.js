import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updatePost } from "../../redux/actions";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function EditForm() {
  const [data, setData] = useState();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();

  const { posts } = useSelector((state) => state.data);

  useEffect(() => {
    setData(...posts.filter((post) => post.id === parseInt(id)));
  }, [id]);

  useEffect(() => {
    reset(data);
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (value) => {
    dispatch(updatePost({ title: value.title, body: value.body }, id));
    navigate("/");
  };

  return (
    <div className="formInput">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5">Update Post</Typography>
        <textarea
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
          type="text"
          placeholder="Body"
          {...register("body", { required: true })}
        />
        {errors.title && (
          <Typography variant="p" sx={{ color: "red", mt: 1 }}>
            This field is required
          </Typography>
        )}

        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Button variant="contained" color="primary" type="submit">
            Update
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
export default EditForm;
