import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TreatmentTabs({ data }) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen size is small

  // Group treatments by "section"
  const treatmentsBySection = {
    Facials: data.filter(
      (treatment) => treatment.attributes.section === "Facials"
    ),
    "Body Massage": data.filter(
      (treatment) => treatment.attributes.section === "Body Massage"
    ),
    Specials: data.filter(
      (treatment) => treatment.attributes.section === "Specials"
    ),
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render treatment cards
  const renderTreatmentCards = (treatments) => {
    return treatments.map((treatment) => (
      <Box key={treatment.attributes.createdAt} sx={{ my: 10 }}>
        <Grid
          container
          m="auto"
          sx={{ justifyContent: "center", width: { xs: "100%", md: "80%" } }}
        >
          <Grid xs={12} sm={4} lg={4} textAlign="center">
            <img
              style={{ objectFit: "fill", width: "80%", height: "auto" }}
              src={
                treatment.attributes.imageMain.data
                  ? treatment.attributes.imageMain.data.attributes.url
                  : ""
              }
              alt=""
            ></img>
          </Grid>
          <Grid xs={12} sm={8} lg={6} px={3}>
            <Typography variant="h4">
              {treatment.attributes.name.toUpperCase()}
            </Typography>
            {treatment.attributes.prices.data.map((price) => (
              <Typography
                variant="subtitle1"
                fontStyle="italic"
                key={`${treatment.id}-${price.attributes.priceEuro}`}
              >
                {price.attributes.duration}
                {price.attributes.package ? " sessions" : " mins"} -{" "}
                {price.attributes.priceEuro} €
              </Typography>
            ))}
            <Typography variant="p">
              {treatment.attributes.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    ));
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },

          // textAlign: "center",
        }}
      >
        <Tabs
          
          value={value}
          onChange={handleChange}
          aria-label="Treatment tabs"
          centered // Centered tabs only on larger screens
          sx={{
            overflowX: isMobile ? "auto" : "unset", // Allow scrolling on mobile
            "& .MuiTabs-indicator": {
              backgroundColor: "#DE7861", // Custom color for the indicator
            },
            "& .MuiTab-root": {
              fontSize: { xs: "1rem", md: "1.5rem" }, // Responsive font size
              fontWeight: "bold", // Bold text
              color: "#678180", // Default text color
              minWidth: "auto", // Prevent fixed minimum width
              "&.Mui-selected": {
                color: "#DE7861", // Active tab text color
              },
            },
          }}
        >
          <Tab label="Facials" {...a11yProps(0)} />
          <Tab label="Body Massage" {...a11yProps(1)} />
          <Tab label="Specials" {...a11yProps(2)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          {renderTreatmentCards(treatmentsBySection.Facials)}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {renderTreatmentCards(treatmentsBySection["Body Massage"])}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {renderTreatmentCards(treatmentsBySection.Specials)}
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
