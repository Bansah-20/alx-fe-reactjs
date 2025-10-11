import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    email: Yup.string()
      .email("Invalid email format.")
      .required("Email is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required."),
  });

  
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Submitted:", values);
    setTimeout(() => {
      alert("Registration successful!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
    
            <div className="mb-4">
              <label className="block font-medium mb-1">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            
            <div className="mb-4">
              <label className="block font-medium mb-1">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
