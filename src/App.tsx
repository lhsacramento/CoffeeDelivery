import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/global";
import { defaultTheme } from "./assets/styles/themes/themes";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
            <Router />
          <GlobalStyle></GlobalStyle>
        </ThemeProvider>    
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App
