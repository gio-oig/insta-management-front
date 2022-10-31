import { useNavigate } from "react-router-dom";
import { Form, FormikProps, Formik } from "formik";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

import FormInput from "src/components/atoms/formInput";

import Routes from "src/constants/routes";
import { SignupSchema } from "src/utils/validations";
import { signup } from "src/lib/api";

const initialFormilValues = {
  name: "",
  email: "",
  password: "",
};

export type SignUpPropertyTypes = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const navigate = useNavigate();

  async function handleSubmit(data: SignUpPropertyTypes) {
    try {
      await signup(data);
      navigate(`/${Routes.signin}`);
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <Formik
      initialValues={initialFormilValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<SignUpPropertyTypes>) => (
        <Form>
          <Grid maxWidth="500px" container rowGap={4}>
            <Grid xs={12}>
              <FormInput label="Name" name="name" />
            </Grid>
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
                  navigate(`/${Routes.signin}`);
                }}
              >
                Do you have an account? signin
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
