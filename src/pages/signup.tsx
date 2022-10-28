import SignUpForm from "src/components/forms/signupForm";
import AuthLayout from "src/components/layout/authLayout";

const Signup = () => {
  return (
    <AuthLayout title="signup">
      <SignUpForm />
    </AuthLayout>
  );
};

export default Signup;
