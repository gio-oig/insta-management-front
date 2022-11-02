import { Navigate, Outlet } from "react-router-dom";
import routes from "src/constants/routes";
import useAuth from "src/hooks/useAuth";

type GuardLayoutProps = {
  isGuestPage?: boolean;
};

const GuardLayout = ({ isGuestPage = false }: GuardLayoutProps) => {
  const { isAuthenticated } = useAuth();

  if (isGuestPage && isAuthenticated) {
    return <Navigate to={routes.home} />;
  }

  if (!isGuestPage && !isAuthenticated) {
    return <Navigate to={routes.signin} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GuardLayout;
