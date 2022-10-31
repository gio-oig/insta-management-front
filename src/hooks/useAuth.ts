import LOCALSTORAGE from "src/constants/localstorageConst";

const useAuth = () => {
  const isAuthenticated = localStorage.getItem(LOCALSTORAGE.TOKEN);

  return {
    isAuthenticated,
  };
};

export default useAuth;
