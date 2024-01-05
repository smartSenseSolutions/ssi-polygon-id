import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Onboarding } from "./Onboarding";
import { Insurance } from "./InsuranceVC";
import { Employment } from "./EmploymentVC";
import { Lab } from "./LabVC";

export const Onboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/employment" element={<Employment />} />
      <Route path="/lab" element={<Lab />} />
    </Routes>
  );
};
