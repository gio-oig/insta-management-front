import { ReactNode, FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children, title }) => (
  <Box
    px="20px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    rowGap="40px"
    pt="5%"
  >
    <Typography>{title}</Typography>
    {children}
  </Box>
);

export default AuthLayout;
