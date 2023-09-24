import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WazifaCard from "../WazifaCard/WazifaCard";

const MarriageWazifa = () => {
  const wazifaData = [
    "Pasand ki jaga shadi ka wazifa (Wazifa For Marriage)",
    "wazifa to get money with attention",
    " Islamic wazifa for wealth with this in mind",
    "Islamic wazifa for wealth with this in mind",
    " jaldi shadi ka mujarab wazifa(islamic dua to get married soon.)",
    " Rishty ka wazifa",
    "pasand shadi ka wazifa",
    "Wazifa for every problem",
    "Wazifa for good rishta in this case Islamic marriage dua in English",
    "Wealth wazifa",
    "Wazifa For Marriage again dua for solving problems in marriage like dua wazaif",
    "kisi ko shadi k liye razi karne ka wazifa",
    "Wazifa for bandish",
    "Wazifa for people living out of country.",
    "And Many More",
  ];
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid
          container
          mt={10}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "Mooli",
                fontFamily: "bold",
              }}
              pb={5}
            >
              Wazifa
            </Typography>
          </Grid>
          {wazifaData.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box mt={5}>
                <WazifaCard data={item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MarriageWazifa;
