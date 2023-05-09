import { Box } from "@mui/material";
import Header from "../../components/Header";

const Profile = () => {
  return ( <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="Profile" subtitle="Manage your profile."/>
    </Box>
  </Box>  
  );
};

export default Profile;