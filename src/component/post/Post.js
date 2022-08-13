import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardActions } from "@mui/material";

export const Post = ({ title, body, id }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="edit"
          color="info"
          onClick={() =>
            navigate(`/editPost/${id}`, {
              state: { title: title, body: body },
            })
          }
        >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" color="warning" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </>
  );
};
