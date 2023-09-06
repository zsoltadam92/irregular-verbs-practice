import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import TablePage from "./pages/Table";
import SettingsPage from "./pages/Settings";
import CardPage from "./pages/Card";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import OpenDyslexicRegular from "./fonts/open_dyslexic/OpenDyslexic-Regular.otf";
import ColorModeContext from "./store/colorMode-context";
import { useContext } from "react";
import CardProvider from "./store/CardProvider";

function App() {
  const colorModeCtx = useContext(ColorModeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/table", element: <TablePage /> },
        { path: "/settings", element: <SettingsPage /> },
        { path: "/card", element: <CardPage /> },
      ],
    },
  ]);

  const theme = createTheme({
    palette: {
      mode: colorModeCtx.mode,
      primary: {
        light: "#757ce8",
        main: "#2180de",
        dark: "#3e08ea",
        contrastText: "#fff",
      },
      ...(colorModeCtx.mode === "light"
        ? {
            background: {
              default: "#fafafa",
              paper: "#fefefe",
            },
            secondary: { main: "#efefef" },
          }
        : {
            secondary: { main: "#333" },
          }),
    },
    typography: {
      fontFamily: "OpenDyslexic, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'OpenDyslexic';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('OpenDyslexic'), local('OpenDyslexic-Regular'), url(${OpenDyslexicRegular}) format('opentype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CardProvider>
          <RouterProvider router={router}></RouterProvider>
        </CardProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
