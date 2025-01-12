import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import DasboardLayout from "./layouts/DasboardLayout";
import BoardPage from "./pages/board-page";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DasboardLayout></DasboardLayout>}>
          <Route path="/:name" element={<BoardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
