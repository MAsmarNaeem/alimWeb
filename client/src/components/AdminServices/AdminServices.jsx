import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BURL } from "../Utils";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const adminToken = localStorage.getItem("admin");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getServices();
    setRefresh(false);
  }, [refresh]);
  const getServices = async () => {
    try {
      const response = await axios.get(`${BURL}/services`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      console.log(response.data.data);
      setServices(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container pt={10}>
          {services.map(({ image, heading1, heading2, paragraph }, i) => (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
              mt={10}
            >
              <Box
                sx={{
                  height: { xs: "auto", md: 600 },
                  width: { xs: "auto", md: 1100 },
                  maxHeight: 1800,
                  maxWidth: 1000,
                  borderRadius: "12px",
                  backgroundColor: "#fff8e1",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  overflow: "hidden",
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={`${BURL}/${image}`}
                    alt="service"
                    height={{ xs: 600, md: 600 }}
                    width={{ xs: "100%", md: 500 }}
                  />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    ml={{ xs: 1, md: 12 }}
                    mt={5}
                    variant="h4"
                    sx={{
                      fontFamily: "Mooli",
                      fontFamily: "bold",
                    }}
                  >
                    {heading1}
                  </Typography>
                  <Typography
                    ml={{ xs: 1, md: 10 }}
                    mt={{ xs: 1, md: 5 }}
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Mooli",
                      fontFamily: "bold",
                    }}
                  >
                    {heading2}
                  </Typography>
                  <Typography
                    mt={{ xs: 3, md: 5 }}
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Mooli",
                      fontFamily: "bold",
                    }}
                  >
                    {paragraph}
                  </Typography>
                  <Typography
                    variant="h6"
                    ml={{ xs: 1, md: 10 }}
                    mt={{ xs: 3, md: 5 }}
                    sx={{
                      textAlign: "center",
                      fontFamily: "Mooli",
                      fontFamily: "bold",
                    }}
                  >
                    03277906144
                  </Typography>
                  <Typography
                    ml={{ xs: 1, md: 10 }}
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Mooli",
                      fontFamily: "bold",
                    }}
                  >
                    03404252585
                  </Typography>
                  <Typography
                    ml={{ xs: 1, md: 10 }}
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Mooli",
                      fontFamily: "bold",
                    }}
                  >
                    03116416137
                  </Typography>
                  <Box
                    ml={{ xs: 1, md: 10 }}
                    mt={3}
                    mb={2}
                    sx={{ textAlign: "center" }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "#4caf50",
                        padding: "10px",
                        "&:hover": {
                          backgroundColor: "#4caf50",
                        },
                      }}
                      href="https://api.whatsapp.com/send?phone=923277906133"
                    >
                      Contact Us
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminServices;
