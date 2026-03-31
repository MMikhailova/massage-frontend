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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const priorityBodyMassageOrder = [
    "DEEP TISSUE MASSAGE",
    "MULTI-DIMENTIONAL MASSAGE |TRAUMA RELEASE)",
    "YOGA MASSAGE | STRETCH & FLOW",
  ];

  const treatmentsBySection = {
    Facials: data.filter(
      (treatment) => treatment.attributes.section === "Facials",
    ),
    "Body Massage": data
      .filter((treatment) => treatment.attributes.section === "Body Massage")
      .sort((a, b) => {
        const nameA = a.attributes.name?.toUpperCase() || "";
        const nameB = b.attributes.name?.toUpperCase() || "";

        const indexA = priorityBodyMassageOrder.indexOf(nameA);
        const indexB = priorityBodyMassageOrder.indexOf(nameB);

        const isPriorityA = indexA !== -1;
        const isPriorityB = indexB !== -1;

        if (isPriorityA && isPriorityB) {
          return indexA - indexB;
        }

        if (isPriorityA) return -1;
        if (isPriorityB) return 1;

        return nameA.localeCompare(nameB);
      }),
    Specials: data.filter(
      (treatment) => treatment.attributes.section === "Specials",
    ),
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTreatmentCards = (treatments) => {
    return treatments.map((treatment) => {
      const sortedPrices = [...treatment.attributes.prices.data].sort(
        (a, b) => {
          const durationA = parseInt(a.attributes.duration);
          const durationB = parseInt(b.attributes.duration);
          return durationA - durationB;
        },
      );

      return (
        <Box
          key={treatment.attributes.createdAt}
          sx={{ my: { xs: 5, md: 10 } }}
        >
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
              />
            </Grid>
            <Grid xs={12} sm={8} lg={6} px={3}>
              <Typography variant="h4">
                {treatment.attributes.name.toUpperCase()}
              </Typography>
              {sortedPrices.map((price) => (
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
      );
    });
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: { xs: "100%", md: "80%" } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Treatment tabs"
          centered
          sx={{
            overflowX: isMobile ? "auto" : "unset",
            "& .MuiTabs-indicator": {
              backgroundColor: "#DE7861",
            },
            "& .MuiTab-root": {
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: "bold",
              color: "#678180",
              minWidth: "auto",
              "&.Mui-selected": {
                color: "#DE7861",
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
