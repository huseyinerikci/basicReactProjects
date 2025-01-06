import { Container } from "@mui/material";
import React from "react";

function PageContainer({ children }) {
  return <Container maxWidth="lg">{children}</Container>;
}

export default PageContainer;
