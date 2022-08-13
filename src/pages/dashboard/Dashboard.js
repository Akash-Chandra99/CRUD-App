import { Box, CssBaseline, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Post } from "../../component/post/Post";
import { Add } from "@mui/icons-material";

function Dashboard() {
  let navigate = useNavigate();
  const { posts } = useSelector((state) => state.data);

  return (
    <Container>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              CRUD App
            </Typography>
            <Stack sx={{ pt: 4 }} justifyContent="center">
              <Button
                onClick={() => navigate("/addPost")}
                variant="contained"
                endIcon={<Add />}
              >
                Add
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container>
          {/* End hero unit */}
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {posts &&
              posts
                .slice(0)
                .reverse()
                .map((post) => (
                  <Grid
                    item
                    component={Card}
                    key={post.id}
                    xs={12}
                    sm={5}
                    md={3}
                    sx={{
                      margin: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Post
                      id={post.id}
                      key={post.id}
                      title={post.title}
                      body={post.body}
                    />
                  </Grid>
                ))}
          </Grid>
        </Container>
      </main>
    </Container>
  );
}

export default Dashboard;
