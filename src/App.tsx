import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App as Application } from "./components/App";

import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./pages/Dashboard";
import { Income } from "./pages/Income";
import { Outcome } from "./pages/Outcome";
import { BalanceProvider } from "./contexts/Loading";

function App() {
  return (
    <BalanceProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Application />}>
            <Route index element={<Dashboard />} />
            <Route path="entradas" element={<Income />} />
            <Route path="saidas" element={<Outcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BalanceProvider>
  );
}

export default App;
