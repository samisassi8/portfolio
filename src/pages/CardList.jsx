import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import Container from "@mui/material/Container";
import Data from "../Data.json";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function test() {
  return (
    <>
      <Container maxWidth="lg" id="CardList">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Portfolio
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={4} ms={4} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  padding: "10px",
                  marginBottom: "30px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={result.img}
                    alt={result.alt}
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ textAlign: "center" }}
                    >
                      {result.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.des}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a
                    href={result.url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      className="btn"
                      style={{
                        transform: "scale(1.2)",
                      }}
                    >
                      Visit me
                    </button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
