import { Box } from "@mui/material";
import CoverageApp from "../components/CoverageApp";
import CoverageAppMobile from "../components/CoverageAppMobile";

const Coverage = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <CoverageApp />
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          height: "calc(100vh - 56px)",
          overflow: "hidden",
        }}
      >
        <CoverageAppMobile />
      </Box>
    </>
  );
};

export default Coverage;
