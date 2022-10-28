import { FC } from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
};

const FormInput: FC<FormInputProps> = ({ type = "text", label, name }) => {
  const [field, meta] = useField({ name });
  return (
    <TextField
      fullWidth
      type={type}
      {...field}
      label={label}
      error={Boolean(meta.touched && meta.error)}
    />
  );
};

export default FormInput;
