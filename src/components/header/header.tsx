import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import routes from "src/constants/routes";
import Grid from "@mui/material/Unstable_Grid2";
import LOCALSTORAGE from "src/constants/localstorageConst";

const layoutRoutes = [
  { title: "Search", route: routes.home },
  { title: "Saved Items", route: routes.savedsearchs },
];

const Header = () => {
  const navigate = useNavigate();

  const handelLogOut = () => {
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
    navigate(`/${routes.signin}`);
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Typography fontSize="20px">Insta Search</Typography>
      <Grid container gap={2} alignItems="center">
        {layoutRoutes.map(({ title, route }) => (
          <Link to={route}>{title}</Link>
        ))}
        <Button variant="contained" onClick={handelLogOut}>
          Logout
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
