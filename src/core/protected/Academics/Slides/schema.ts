import * as Yup from "yup";

export type FormType = {
  faculty: string;
  program: string;
  semester: string;
  name: string;
  hour: number;
};

export const initialFormData: FormType = {
  faculty: "",
  program: "",
  semester: "",
  name: "",
  hour: null,
};

export const validationSchema = Yup.object().shape({
  faculty: Yup.string().required("Please select faculty name"),
  program: Yup.string().required("Please select program name"),
  semester: Yup.string().required("Please select semester name"),
  name: Yup.string().required("Please enter slides name"),
  hour: Yup.number()
    .required("Please upload file")
    .typeError("Please enter valid  file"),
});
