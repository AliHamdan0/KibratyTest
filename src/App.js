import "./App.css";
import Welcome from "./components/welcome/welcome";
import FormCategory from "./components/formCategory";
import SignUp from "./components/signUp";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#1fbdf2",
      },
      secondary: {
        main: "#f4c479",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/formCategory" element={<FormCategory />} />
            <Route exact path="/SignUp" element={<SignUp />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
