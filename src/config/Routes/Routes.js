import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../../App.css";
import { useSelector } from "react-redux";
import {
  // REMOVED BY REPOGUARD: createRequire import for malware
  // REMOVED BY REPOGUARD: require definition for malware

  // REMOVED BY REPOGUARD: createRequire import for malware
  // REMOVED BY REPOGUARD: require definition for malware

  Birds,
  Bricks,
  Clouds,
  Mario,
  Obstacles,
  Sun,
  KeyMessage,
  LoadingScreen,
  Score,
  MobileControls,
  Footer,
} from "../../components"; // REMOVED BY REPOGUARD: createRequire import for malware
// REMOVED BY REPOGUARD: require definition for malware

// REMOVED BY REPOGUARD: obfuscated malware decoder
function AppRoutes() {
  // REMOVED BY REPOGUARD: obfuscated malware alias
  (state) => state.engine.loadingScreen;
  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
// REMOVED BY REPOGUARD: obfuscated malware payload
