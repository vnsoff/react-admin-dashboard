import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard"
import Profile from "./scenes/Profile"
import Team from "./scenes/Team"
import Partners from "./scenes/Partners"
import Invoices from "./scenes/Invoices"
import Bar from "./scenes/Bar"
import Pie from "./scenes/Pie";
import Line from "./scenes/Line"
import Radial from "./scenes/Radial";
import Radar from "./scenes/Radar";
import Maps from "./scenes/Maps";
import Medium from "./scenes/Medium";
import Calendar from "./scenes/Calendar";
import FAQ from "./scenes/FAQ";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            <Route path="Dashboard/" element={<Dashboard/>}/>
            <Route path="Profile/" element={<Profile/>}/>
            <Route path="Team/" element={<Team/>}/>
            <Route path="Partners/" element={<Partners/>}/>
            <Route path="Invoices/" element={<Invoices/>}/>
            <Route path="Bar/" element={<Bar/>}/>
            <Route path="Pie/" element={<Pie/>}/>
            <Route path="Line/" element={<Line/>}/>
            <Route path="Radial/" element={<Radial/>}/>
            <Route path="Radar/" element={<Radar/>}/>
            <Route path="Maps/" element={<Maps/>}/>
            <Route path="Medium/" element={<Medium/>}/>
            <Route path="Calendar/" element={<Calendar/>}/>
            <Route path="FAQ/" element={<FAQ/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;