import { Box } from "@mui/material";
import Header from "../../components/Header";

const Line = () => {
  return ( <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="Line Charts" subtitle="Graphs showing data trends with connected lines."/>
    </Box>
  </Box>  
  );
};

export default Line;