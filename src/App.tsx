import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/global";
import { defaultTheme } from "./assets/styles/themes/themes";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";
import { DeliveryContextProvider } from "./contexts/DeliveryContext";


function App() {

  return (
    <CartContextProvider>
      <DeliveryContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
              <Router />
            <GlobalStyle></GlobalStyle>
          </ThemeProvider>    
        </BrowserRouter>
      </DeliveryContextProvider>
    </CartContextProvider>
  );
}

export default App
