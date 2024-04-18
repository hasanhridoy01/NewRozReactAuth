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
import "./SignIn.css";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../ContextProviders/AuthProvider";

const SignIn = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const { signInUser } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  //Sign In a user form firebase.............!
  const handleFormSubmit = (e) => {
    e.preventDefault();

    //get form field value...............!
    const email = e.target.email.value;
    const password = e.target.password.value;

    //form validation................!
    if (!email) {
      setError("Please enter your email.");
    } else if (!password) {
      setError("Please enter your password.");
    } else {
      signInUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          //if find valid user............!
          if(user){
            navigate('/dashboard');
            // navigate(from, {replace: true});
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
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
                borderRadius: "14px",
                border: "3px solid #00a1a1",
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
                  Sign-In to continue
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

                <Form onSubmit={handleFormSubmit}>
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
                        name="password"
                        required
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

export default SignIn;
