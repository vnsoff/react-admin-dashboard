import { Box } from "@mui/material";
import Header from "../../components/Header";

const Invoices = () => {
  return ( <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="Invoices" subtitle="Documents detailing transactions and payment information for goods or services."/>
    </Box>
  </Box>  
  );
};

export default Invoices;