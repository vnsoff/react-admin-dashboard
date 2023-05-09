import { Box } from "@mui/material";
import Header from "../../components/Header";

const Radar = () => {
  return ( <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="Radar Charts" subtitle="Circular charts representing data in segments."/>
    </Box>
  </Box>  
  );
};

export default Radar;