import { useNavigate } from "react-router-dom";
import { Form, FormikProps, Formik } from "formik";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

import FormInput from "src/components/atoms/formInput";
import Routes from "src/constants/routes";
import { SigninSchema } from "src/utils/validations";

const initialFormilValues = {
  email: "",
  password: "",
};

type SignUpPropertyTypes = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values: SignUpPropertyTypes) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Formik
      initialValues={initialFormilValues}
      validationSchema={SigninSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<SignUpPropertyTypes>) => (
        <Form>
          <Grid maxWidth="500px" container rowGap={4}>
            <Grid xs={12}>
              <FormInput type="email" label="Email" name="email" />
            </Grid>
            <Grid xs={12}>
              <FormInput type="password" label="Password" name="password" />
            </Grid>
            <Grid xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
            <Grid xs={12}>
              <Button
                variant="text"
                fullWidth
                onClick={() => {
                  navigate(`/${Routes.signup}`);
                }}
              >
                Do not have an account? signup
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
