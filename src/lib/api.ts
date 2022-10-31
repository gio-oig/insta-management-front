import axios from "axios";
import { SigninPropertyTypes } from "src/components/forms/signinForm";
import { SignUpPropertyTypes } from "src/components/forms/signupForm";

const axiosInst = axios.create({
  baseURL: "http://localhost:5000/",
});

export const signup = async (data: SignUpPropertyTypes) => {
  await axiosInst.post("auth/signup", data);
};

export const signin = async (data: SigninPropertyTypes) => {
  return await axiosInst.post<{ token: string }>("auth/signin", data);
};
