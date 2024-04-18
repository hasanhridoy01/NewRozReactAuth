import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Form } from "react-router-dom";
import PDFComponent from "../PDFComponent/PDFComponent";
import { PDFDownloadLink } from "@react-pdf/renderer";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DashboardTabs() {
  //Tabs Change State...............!
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState({});

  //Sender Details State..................!
  const [fullName, setFullName] = useState("");
  const [senderIban, setSenderIban] = useState(0);
  const [senderIdentityNumber, setSenderIdentityNumber] = useState(0);
  const [senderMobileNumber, setSenderMobileNumber] = useState(0);
  const [senderDateOfBirth, setSenderDateOfBirth] = useState(0);
  const [selectNationality, setSelectNationality] = useState(0);
  const [senderIdentityExpirationDate, setSenderIdentityExpirationDate] =
    useState(0);
  const [senderAddress, setSenderAddress] = useState(0);
  const [senderPlaceOfBirth, setSenderPlaceOfBirth] = useState(0);
  const [selectSenderKind, setSelectSenderKind] = useState("");
  const [selectIdentityType, setSelectIdentityType] = useState("");
  const [fibClientId, setFibClientId] = useState(0);
  const [selectSenderGender, setSelectSenderGender] = useState("");

  //Tabs Change Methods....................!
  const handleChange = (event, newValue) => {
    console.log(newValue);
  };
  const handleSaveAndContinue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  //Handle Sender Details..........................!
  const handleSenderDetails = (e) => {
    e.preventDefault();

    //get sender input value......................!
    const fullName = e.target.elements.fullName.value;
    setFullName(fullName);
    const senderIban = e.target.elements.senderIban.value;
    setSenderIban(senderIban);
    const senderIdentityNumber = e.target.elements.senderIdentityNumber.value;
    setSenderIdentityNumber(senderIdentityNumber);
    const senderMobileNumber = e.target.elements.senderMobileNumber.value;
    setSenderMobileNumber(senderMobileNumber);
    const senderDateOfBirth = e.target.elements.senderDateOfBirth.value;
    setSenderDateOfBirth(senderDateOfBirth);
    const selectNationality = e.target.elements.selectNationality.value;
    setSelectNationality(selectNationality);
    const senderIdentityExpirationDate =
      e.target.elements.senderIdentityExpirationDate.value;
    setSenderIdentityExpirationDate(senderIdentityExpirationDate);
    const senderAddress = e.target.elements.senderAddress.value;
    setSenderAddress(senderAddress);
    const senderPlaceOfBirth = e.target.elements.senderPlaceOfBirth.value;
    setSenderPlaceOfBirth(senderPlaceOfBirth);
    const selectSenderKind = e.target.elements.selectSenderKind.value;
    setSelectSenderKind(selectSenderKind);
    const selectIdentityType = e.target.elements.selectIdentityType.value;
    setSelectIdentityType(selectIdentityType);
    const fibClientId = e.target.elements.fibClientId.value;
    setFibClientId(fibClientId);
    const selectSenderGender = e.target.elements.selectSenderGender.value;
    setSelectSenderGender(selectSenderGender);

    //change tabs methods
    handleSaveAndContinue();
  };

  //Manage Sender Details......................!
  const HandleSenderData = () => {
    //get all input field value..................!
    const senderDetails = {
      fullName,
      senderIban,
      senderIdentityNumber,
      senderMobileNumber,
      senderDateOfBirth,
      selectNationality,
      senderIdentityExpirationDate,
      senderAddress,
      senderPlaceOfBirth,
      selectSenderKind,
      selectIdentityType,
      fibClientId,
      selectSenderGender,
    };
    setData(senderDetails)
    console.log(senderDetails);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-around",
            },
            "& .MuiTab-root": {
              minWidth: "auto",
              padding: "10px",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Sender Details" {...a11yProps(0)} />
          <Tab label="Receiver Details" {...a11yProps(1)} />
          <Tab label="Transfer Details" {...a11yProps(2)} />
          <Tab label="Preview & Confirm" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Form onSubmit={handleSenderDetails}>
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
                      name="fullName"
                      required
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
                      required
                      name="senderIban"
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
                      required
                      name="senderIdentityNumber"
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
                      required
                      name="senderMobileNumber"
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
                      required
                      name="senderDateOfBirth"
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
                      name="selectNationality"
                      margin="normal"
                      required
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
                      variant="outlined"
                      margin="normal"
                      type="date"
                      required
                      name="senderIdentityExpirationDate"
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
                      required
                      name="senderAddress"
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
                      required
                      name="senderPlaceOfBirth"
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
                      required
                      margin="normal"
                      name="selectSenderKind"
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
                      required
                      name="selectIdentityType"
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
                      required
                      margin="normal"
                      name="fibClientId"
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
                      required
                      name="selectSenderGender"
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
            color="inherit"
            size="large"
            type="submit"
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
        </Form>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            background: "#d9f1f1",
            padding: "40px",
            height: "400px",
          }}
        >
          <Container>
            <Grid container justifyContent="space-between" alignItems="center">
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
          onClick={handleSaveAndContinue}
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
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Box
          sx={{
            background: "#d9f1f1",
            padding: "40px",
            height: "500px",
          }}
        >
          <Container>
            <Grid container justifyContent="space-between" alignItems="center">
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
          onClick={handleSaveAndContinue}
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
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Typography variant="h5" gutterBottom>
          Preview & Confirm
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please review the information below before confirming the transaction.
        </Typography>
        <Box
          sx={{
            background: "#d9f1f1",
            padding: "40px",
            height: "450px",
            marginTop: "10px",
          }}
        >
          <Container>
            <Typography variant="h6" gutterBottom>
              Sender Details
            </Typography>
            <Divider>Sender Details</Divider>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item lg={4} sm={8} sx={12}>
                <Stack sx={{ marginTop: "18px" }}>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender Full Name
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {fullName}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender IBAN
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {senderIban}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender Identity Number
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {senderIdentityNumber}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender Mobile Number
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {senderMobileNumber}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender Date Of Birth
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {senderDateOfBirth}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item lg={3} sm={8} sx={12}>
                <Stack sx={{ marginTop: "18px" }}>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Select Nationality
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {selectNationality}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender identity Expiration Date
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {senderIdentityExpirationDate}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender Address
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {senderAddress}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Sender Place Of Birth
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {senderPlaceOfBirth}
                  </Typography>

                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ height: "17px" }}
                  ></Typography>
                </Stack>
              </Grid>

              <Grid item lg={4} sm={8} sx={12}>
                <Stack sx={{ marginTop: "18px" }}>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Select Sender kind
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {selectSenderKind}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Select identity Type
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {selectIdentityType}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Fib Client ID
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {fibClientId}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "0px", color: "#00CED1" }}
                  >
                    Select Sender Gender
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: "#5CB3FF",
                      marginTop: "0px",
                      marginBottom: "16px",
                    }}
                  >
                    {selectSenderGender}
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
        <PDFDownloadLink
          document={<PDFComponent></PDFComponent>}
          fileName="FORM"
        >
          {({ loading }) =>
            loading ? (
              <Button>loading...........</Button>
            ) : (
              <Button
                variant="contained"
                color="inherit"
                onClick={HandleSenderData}
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
            )
          }
        </PDFDownloadLink>
      </CustomTabPanel>
    </Box>
  );
}
