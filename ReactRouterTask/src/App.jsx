import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-950">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/characters" element={<Characters />} />

          <Route
            path="/characters/:id"
            element={<CharacterDetail />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;