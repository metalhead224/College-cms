import * as Yup from "yup";

export type FormType = {
  body: any;
  enddate: any;
  date: any;
  hour: any;
  name: any;
  // semester: any;
  // program: any;
  // faculty: any;
  // facultyName: string;
};

export const initialFormData: FormType = {
    body: undefined,
    enddate: undefined,
    date: undefined,
    hour: undefined,
    name: undefined,
    // facultyName: "",
   
    // semester: undefined,
    // program: undefined,
    // faculty: undefined
};

export const validationSchema = Yup.object().shape({
  facultyName: Yup.string().required("Please enter published date"),
});
