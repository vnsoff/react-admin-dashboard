import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Stack from '@mui/material/Stack';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="50px"
        width="350px"
      >
        <InputBase sx={{ ml: 4, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 2 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" >
        <IconButton size="large" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon fontSize="inherit"/>
          ) : (
            <LightModeOutlinedIcon fontSize="inherit"/>
          )}
        </IconButton >
        <IconButton size="large">
          <NotificationsOutlinedIcon fontSize="inherit"/>
        </IconButton>
        <IconButton size="large">
          <SettingsOutlinedIcon fontSize="inherit"/>
        </IconButton>
        <IconButton size="large">
          <PersonOutlinedIcon fontSize="inherit"/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
