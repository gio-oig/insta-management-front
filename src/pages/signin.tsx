import AuthLayout from "src/components/layout/authLayout";
import SignInForm from "src/components/forms/signinForm";

const Signin = () => {
  return (
    <AuthLayout title="signup">
      <SignInForm />
    </AuthLayout>
  );
};

export default Signin;
