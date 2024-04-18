import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Form, useNavigate, useParams } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../../ContextProviders/AuthProvider";
import { ButtonGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Stack from "@mui/material/Stack";
import DashboardTabs from "./DashboardTabs";

const drawerWidth = 250;

const postsPerPage = 5;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [viewPost, setViewPost] = React.useState({});
  const navigate = useNavigate();
  const { signOutUser } = React.useContext(AuthContext);

  //LogOut user....................!
  const handlelogOut = () => {
    signOutUser();
    navigate("/signIn");
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [posts, setPosts] = React.useState([]);

  const [pageNumber, setPageNumber] = React.useState(0);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(posts.length / postsPerPage);
  const displayedPosts = posts.slice(
    pageNumber * postsPerPage,
    (pageNumber + 1) * postsPerPage
  );

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    justifyContent: "center",
    alignItem: "center",
    margin: "auto",
  };

  const [viewUpdatePost, setViewUpdatePost] = React.useState({
    title: "",
    body: "",
    id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setViewUpdatePost({ ...viewUpdatePost, [name]: value });
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>User</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>Admin</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>SuperAdmin</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [openBack, setOpenBack] = React.useState(false);

  const handleCloseBackDrop = () => {
    setOpenBack(false);
  };

  React.useEffect(() => {
    let timer;
    if (openBack) {
      timer = setTimeout(() => {
        setOpenBack(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [openBack]);

  //tabs content...............!
  const [activeTab, setActiveTab] = React.useState("home");

  const handleNextTab = () => {
    const tabsOrder = ["home", "profile", "longer-tab", "contact"];
    const currentIndex = tabsOrder.indexOf(activeTab);
    const nextTab = tabsOrder[currentIndex + 1];
    if (nextTab) {
      console.log("Next Tab:", nextTab);
      setActiveTab(nextTab);
      console.log("Active Tab:", activeTab);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#00a1a1",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            AdminDashBoard
          </Typography>
          <Button
            onClick={handlelogOut}
            variant="contained"
            sx={{ color: "#ffffff" }}
          >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid
          container
          alignItems="flex-start"
          justifyContent="center"
          alignItem="center"
        >
          <Grid item lg={12} md={12} xs={12}>
            <Box
              sx={{ width: "1100px", marginBottom: "0px", marginLeft: "70px"}}
            >
              {/* <Tabs id="justify-tab-example" className="mb-3" justify>
                <Tab eventKey="home" title="Sender Details">
                  <Box sx={{ background: "#d9f1f1", padding: "40px" }}>
                    <Container>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Sender Full Name</label>
                            <TextField
                              label="Sender Full Name"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Sender IBAN
                            </label>
                            <TextField
                              label="Sender IBAN"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Sender Identity Number
                            </label>
                            <TextField
                              label="Sender Identity Number"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Sender Mobile Number
                            </label>
                            <TextField
                              label="Sender Mobile Number"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Sender Date Of Birth
                            </label>
                            <TextField
                              variant="outlined"
                              type="date"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />
                          </Stack>
                        </Grid>

                        <Grid item lg={3} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Select Nationality</label>
                            <TextField
                              label="Select Nationality"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Sender Identity Expiration Date
                            </label>
                            <TextField
                              label="Sender Identity Expiration Date"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Sender Address
                            </label>
                            <TextField
                              label="Sender Address"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Sender Place Of Birth
                            </label>
                            <TextField
                              variant="outlined"
                              type="date"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <div className="" style={{ height: "85px" }}></div>
                          </Stack>
                        </Grid>

                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Select Sender Kind</label>
                            <TextField
                              label="Select Sender Kind"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Select Identity Type
                            </label>
                            <TextField
                              label="Select Identity Type"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Fib Client ID
                            </label>
                            <TextField
                              label="Fib Client ID"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Select Sender Gender
                            </label>
                            <TextField
                              label="Select Sender Gender"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <div className="" style={{ height: "85px" }}></div>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={handleNextTab}
                    color="inherit"
                    size="large"
                    sx={{
                      marginTop: "10px",
                      float: "right",
                      "&:hover": {
                        backgroundColor: "info",
                      },
                    }}
                    disableElevation // Remove elevation
                    disableFocusRipple // Remove focus ripple
                    gutterBottom
                  >
                    Save & Continue
                  </Button>
                </Tab>

                <Tab eventKey="profile" title="Receiver Details">
                  <Box
                    sx={{
                      background: "#d9f1f1",
                      padding: "40px",
                      height: "400px",
                    }}
                  >
                    <Container>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Receiver Full Name</label>
                            <TextField
                              label="Enter Receiver Full Name"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Receiver Mobile Number
                            </label>
                            <TextField
                              label="Receiver Mobile Number"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Select Receiver Back
                            </label>
                            <TextField
                              label="Select Receiver Back"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <div className="" style={{ height: "170px" }}></div>
                          </Stack>
                        </Grid>

                        <Grid item lg={3} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Receiver IBAN</label>
                            <TextField
                              label="Receiver IBAN"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Receiver Address
                            </label>
                            <TextField
                              label="Receiver Address"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Select Receiver Nationality
                            </label>
                            <TextField
                              label="Select Receiver Nationality"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <div className="" style={{ height: "170px" }}></div>
                          </Stack>
                        </Grid>

                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Receiver Kind</label>
                            <TextField
                              label="Receiver Kind"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Select Receiver Gender
                            </label>
                            <TextField
                              label="Select Receiver Gender"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <div className="" style={{ height: "255px" }}></div>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="large"
                    sx={{
                      marginTop: "10px",
                      float: "right",
                      "&:hover": {
                        backgroundColor: "info",
                      },
                    }}
                    disableElevation // Remove elevation
                    disableFocusRipple // Remove focus ripple
                    gutterBottom
                  >
                    Save & Continue
                  </Button>
                </Tab>

                <Tab eventKey="longer-tab" title="Transfer Details">
                  <Box
                    sx={{
                      background: "#d9f1f1",
                      padding: "40px",
                      height: "500px",
                    }}
                  >
                    <Container>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Amount</label>
                            <TextField
                              label="Enter the amount to transfer"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Payment Type
                            </label>
                            <TextField
                              label="Payment Type"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Commission Percentage
                            </label>
                            <TextField
                              label="Enter the Commission Percentage"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <div className="" style={{ height: "390px" }}></div>
                          </Stack>
                        </Grid>

                        <Grid item lg={3} sm={8} sx={12}>
                          <Stack>
                            <label htmlFor="">Select Purpose</label>
                            <TextField
                              label="Select Purpose"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Relationship With Receiver
                            </label>
                            <TextField
                              label="Relationship With Receiver"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              sx={{
                                "& .MuiInputBase-root": {
                                  backgroundColor: "white", // Custom background color
                                },
                                "& .MuiInputLabel-root": {
                                  color: "black", // Custom label color
                                },
                                marginTop: "5px",
                              }}
                            />

                            <label htmlFor="" style={{ marginTop: "7px" }}>
                              Invoice Upload
                            </label>
                            <TextField
                              variant="outlined"
                              type="file"
                              margin="normal"
                              size="small"
                              sx={{
                                border: "none",
                                marginTop: "5px",
                              }}
                            />

                            <div className="" style={{ height: "390px" }}></div>
                          </Stack>
                        </Grid>

                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack>
                            <Typography variant="h6" gutterBottom>
                              Transfer Checklist
                            </Typography>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Customer ID verified"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Company Registration checked"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="is KYC complete"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Invoice Complaint"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Supporting Documents collected"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Transfer from new deposited fund"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Transfer from existing fund"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Company capital matching the transfer limit"
                              />
                            </FormGroup>
                            <div className="" style={{ height: "255px" }}></div>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="large"
                    sx={{
                      marginTop: "10px",
                      float: "right",
                      "&:hover": {
                        backgroundColor: "info",
                      },
                    }}
                    disableElevation // Remove elevation
                    disableFocusRipple // Remove focus ripple
                    gutterBottom
                  >
                    Save & Continue
                  </Button>
                </Tab>

                <Tab eventKey="contact" title="Preview & Confirm">
                  <Typography variant="h5" gutterBottom>
                    Preview & Confirm
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Please review the information below before confirming the
                    transaction.
                  </Typography>
                  <Box
                    sx={{
                      background: "#d9f1f1",
                      padding: "40px",
                      height: "350px",
                      marginTop: "10px",
                    }}
                  >
                    <Container>
                      <Typography variant="h6" gutterBottom>
                        Sender Details
                      </Typography>
                      <Divider>Sender Details</Divider>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack spacing={2} sx={{ marginTop: "18px" }}>
                            <Typography variant="body1" gutterBottom>
                              Sender Full Name
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sender IBAN
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sender Identity Number
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sender Mobile Number
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sender Date Of Birth
                            </Typography>
                          </Stack>
                        </Grid>

                        <Grid item lg={3} sm={8} sx={12}>
                          <Stack spacing={2} sx={{ marginTop: "18px" }}>
                            <Typography variant="body1" gutterBottom>
                              Select Nationality
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sender identity Expiration Date
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sender Address
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Sender Place Of Birth
                            </Typography>
                            <Typography
                              variant="body1"
                              gutterBottom
                              sx={{ height: "17px" }}
                            ></Typography>
                          </Stack>
                        </Grid>

                        <Grid item lg={4} sm={8} sx={12}>
                          <Stack spacing={2} sx={{ marginTop: "18px" }}>
                            <Typography variant="body1" gutterBottom>
                              Select Sender kind
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Select identity Type
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Fib Client ID
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Select Sender Gender
                            </Typography>
                            <Typography
                              variant="body1"
                              gutterBottom
                              sx={{ height: "17px" }}
                            ></Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="large"
                    sx={{
                      marginTop: "10px",
                      float: "right",
                      "&:hover": {
                        backgroundColor: "info",
                      },
                    }}
                    disableElevation // Remove elevation
                    disableFocusRipple // Remove focus ripple
                    gutterBottom
                  >
                    Save & Continue
                  </Button>
                </Tab>
              </Tabs> */}
              <DashboardTabs></DashboardTabs>
            </Box>
          </Grid>

          {/* BackDrop */}
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBack}
            onClick={handleCloseBackDrop}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          {/* BackDrop */}
        </Grid>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
