import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";

export default function SignRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
