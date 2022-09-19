import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FormGroup from "../../../components/FormComponents/FormGroup";
import { useHeaderDetails } from "../../../context/HeaderContext";
import { SideBarPaths } from "../SideBar/SidebarPaths";
import { initialFormData, validationSchema } from "../NoticeBoard/schema";

const AddNewNotice = () => {
  const formRef = useRef(null);
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Add New Notice");
  }, []);

  return (
    <div className="d-flex flex-column w-100 mt-3">
      <div className=" rounded p-4 d-flex flex-column  border-secondary border">
        <h2 className="fw-semibold h5">Add new Notice</h2>
        <p className="fw-light des mt-2">Specify exactly as per requirement</p>
        <Formik
          initialValues={initialFormData}
          validationSchema={validationSchema}
          innerRef={formRef}
          onSubmit={(values, { resetForm }) => {}}
        >
          {({
            handleSubmit,
            touched,
            errors,
            values,
            handleChange,
            setFieldValue,
            handleBlur,
          }) => {
            console.log(values);
            return (
              <Form className="row w-100 mt-3 g-5">
                <div className="col-4">
                  <FormGroup
                    type="select"
                    label="Publish Date"
                    name="date"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.date}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      setFieldValue("date", e.target.value);
                    }}
                    options={[{ label: "date", value: "1" }]}
                  />
                </div>
                <div className="col-4">
                  <FormGroup
                    type="select"
                    label="End Date"
                    name="date"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.enddate}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      setFieldValue("enddate", e.target.value);
                    }}
                    options={[{ label: "date", value: "1" }]}
                  />
                </div>
                <div className="col-4">
                  <FormGroup
                    type="select"
                    label="Body"
                    name="Text Area"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.body}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      setFieldValue("body", e.target.value);
                    }}
                    options={[{ label: "body", value: "1" }]}
                  />
                </div>
                <div className="col-4">
                  <FormGroup
                    type="text"
                    label="Notice Category"
                    name="name"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.name}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <div className="col-4">
                  <FormGroup
                    type="file"
                    label="upload"
                  
                    
                  
                    name="image file"
                    className="py-3"
                    errors={errors}
                    touched={touched}
                    value={values.hour}
                    handleBlur={handleBlur}
                    handleChange={(e) => {
                      setFieldValue("file", e.target.value);
                    }}
                   
                  />
                
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="d-flex mt-4">
        <Link
          to={SideBarPaths.noticeBoard.noticeboard}
          className="btn btn-outline-purple rounded-border btn-form fw-semibold des d-flex align-items-center justify-content-center"
        >
          Back
        </Link>
        <div
          role={"button"}
          className="btn-gradient-primary  d-flex  align-items-center justify-content-center ms-3 btn-form des "
          onClick={() => {
            formRef?.current?.handleSubmit();
          }}
        >
          Save as
        </div>
      </div>
    </div>
  );
};

export default AddNewNotice;