import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Tabs,
  Tab,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";

// Icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const GoogleMap = ({ map }) => {
  const [loading, setLoading] = useState(true);
  const handleIfrmeLoad = () => setLoading(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      {!loading ? (
        <Box sx={{ width: "100%", height: "100%" }}>
          <iframe
            title="Netcom Coverage Map"
            src={map}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={handleIfrmeLoad}
          ></iframe>
        </Box>
      ) : (
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          square
          elevation={0}
        >
          <CircularProgress />
        </Paper>
      )}
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, width: "100%", height: "100%", minHeight: 500 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const phones = ["+584244126217", "02417740318"];

const emails = [
  "info@netcomplusve.com",
  "ventas@netcomplusve.com",
  "soporte@netcomplusve.com",
];

const ContactMethods = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: 240,
            minWidth: 240,
          }}
        >
          <Tab label="Direcciónes" {...a11yProps(0)} />
          <Tab label="Números" {...a11yProps(1)} />
          <Tab label="Correos Electrónicos" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} sx={{ width: "100%" }}>
          <GoogleMap
            map={
              "https://www.google.com/maps/d/embed?hl=es&mid=1rUmVJmuO_d7PP4JoWa4aCqliwJzBDD0&ll"
            }
          />
        </TabPanel>
        <TabPanel value={value} index={1} sx={{ width: "100%" }}>
          <List sx={{ width: "100%" }}>
            {phones.map((phone) => (
              <ListItem key={phone} color="primary" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocalPhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={phone} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </TabPanel>
        <TabPanel value={value} index={2} sx={{ width: "100%" }}>
          <List sx={{ width: "100%" }}>
            {emails.map((email) => (
              <ListItem key={email} color="primary" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AlternateEmailIcon />
                  </ListItemIcon>
                  <ListItemText primary={email} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default ContactMethods;
