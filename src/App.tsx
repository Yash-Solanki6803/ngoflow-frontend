import { BrowserRouter, Routes, Route } from "react-router";
import { RootLayout } from "./pages/RootLayout";
import { Homepage } from "./pages/Homepage";
import { Login, Register } from "./components";
import { Dashboard } from "./pages/Dashboard";
import { SingleNgo } from "./pages/SingleNgo";
import { SingleCampaign } from "./pages/SingleCampaign";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ngos/:ngoId" element={<SingleNgo />} />
          <Route path="campaigns/:campaignId" element={<SingleCampaign />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
