import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Reroute from "./routes";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        {/* <Header /> */}
        <Reroute />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
