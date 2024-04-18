import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import "./SignUp.css";
import { Form, Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { AuthContext } from "../../ContextProviders/AuthProvider";

const SignUp = () => {
  const [error, setError] = React.useState();
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  //HandleSignUpForm......................!
  const HandleSignUpForm = (e) => {
    e.preventDefault();

    //get input field value...............!
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //form validation................!
    if (!name) {
      setError("Please enter your name.");
    } else if (!email) {
      setError("Please enter your email.");
    } else if (!password) {
      setError("Please enter your password.");
    } else {
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateUserProfile(name)
            .then(() => {
              navigate("/signIn");
            })
            .catch((error) => {
              console.log(error);
              setError(error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  return (
    <div>
      <Container sx={{ margin: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <Card
              alignItems="center"
              justifyContent="center"
              sx={{
                display: "flex",
                paddingTop: "40px",
                paddingBottom: "40px",
                width: "520px",
                marginLeft: "280px",
                borderRadius: "15px",
                border: "2px solid #00a1a1",
              }}
            >
              <CardContent sx={{ margin: "auto", textAlign: "center" }}>
                <Typography
                  sx={{ color: "#00a1a1" }}
                  variant="h4"
                  gutterBottom
                  mt={3}
                  mb={5}
                >
                  Sign-Up to Continue
                </Typography>

                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    margin: "10px 0px 20px 0px",
                    color: "red",
                  }}
                >
                  {error}
                </Typography>

                <Form onSubmit={HandleSignUpForm}>
                  <Box mb={3}>
                    <div className="inputContainer">
                      <input
                        className="inputStyle"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </Box>
                  <Box mb={3}>
                    <div className="inputContainer">
                      <input
                        className="inputStyle"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                  </Box>
                  <Box mb={3}>
                    <div className="inputContainer">
                      <input
                        className="inputStyle"
                        type="password"
                        required
                        name="password"
                        placeholder="Enter Your Password"
                      />
                    </div>
                  </Box>
                  <Box mb={3} ml={1}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember me"
                        sx={{ color: "#00a1a1" }}
                      />
                    </FormGroup>
                  </Box>

                  <Box
                    sx={{
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      gutterBottom
                      textAlign="left"
                      ml={1}
                      mb={3}
                      sx={{ color: "#00a1a1" }}
                    >
                      <Link
                        to="/signIn"
                        style={{ textDecoration: "none", color: "#00a1a1" }}
                      >
                        Do you have an account?
                      </Link>
                    </Typography>
                  </Box>

                  <Box mb={3}>
                    <Button
                      variant="contained"
                      sx={{
                        width: "395px",
                        padding: "15px",
                        backgroundColor: "#00A1A1",
                        ":hover": {
                          backgroundColor: "#00a1a1",
                        },
                      }}
                      type="submit"
                    >
                      CONTINUE
                    </Button>
                  </Box>
                </Form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
