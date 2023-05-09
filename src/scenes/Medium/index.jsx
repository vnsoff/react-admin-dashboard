import { Box } from "@mui/material";
import Header from "../../components/Header";

const Medium = () => {
  return ( <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="Medium" subtitle="Articles published on the Medium platform."/>
    </Box>
  </Box>  
  );
};

export default Medium;