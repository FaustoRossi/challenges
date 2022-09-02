import { Fragment, useState } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Textarea,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

import { Formik, Form, useFormik, Field } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
	firstName: yup
		.string()
		.min(3, "Name should be of minimum 3 characters length")
		.required("*Name field is required"),
	email: yup
		.string()
		.email("Enter a valid email")
		.required("*Email is required"),
	password: yup
		.string()
		.min(8, "Password should be of minimum 8 characters length")
		.required("*Password field is required"),
});

const ContactForm = () => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState([]);

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center bg-">
			<h1 className="text-gray-700 font-semibold text-lg mb-6">Form</h1>

			<div className="flex w-[20rem]  flex-col gap-4 shadow-lg shadow-gray-800 p-10">
				<Formik
					initialValues={{
						firstName: "",
						email: "",
						password: "",
						textArea: "",
					}}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						setData(values);
						setOpen(!open);
						console.log(values);
					}}
				>
					{({ errors, touched }) => (
						<Form>
							<div className="my-4">
								<Field
									as={Input}
									color="green"
									variant="static"
									label="Name"
									name="firstName"
									error={touched.firstName && Boolean(errors.firstName)}
								/>
								{errors.firstName && touched.firstName ? (
									<div className="text-red-600 drop-shadow-sm  text-sm py-1">
										{errors.firstName}
									</div>
								) : null}
							</div>

							<div className="my-4">
								<Field
									as={Input}
									color="indigo"
									type="email"
									variant="static"
									label="Email"
									name="email"
									error={touched.email && Boolean(errors.email)}
								/>
								{errors.email && touched.email ? (
									<div className="text-red-600 drop-shadow-sm  text-sm py-1">
										{errors.email}
									</div>
								) : null}
							</div>
							<div className="my-4">
								<Field
									as={Input}
									color="teal-200"
									variant="static"
									label="Password"
									type="password"
									name="password"
									error={touched.password && Boolean(errors.password)}
								/>
								{errors.password && touched.password ? (
									<div className="text-red-600 drop-shadow-sm text-sm  py-1">
										{errors.password}
									</div>
								) : null}
							</div>
							<div className="my-4">
								<Field as={Textarea} name="textArea" label="Message" />
							</div>
							<div className="text-center">
								<Button
									type="submit"
									color="indigo"
									variant="gradient"
						
								>
									Submit
								</Button>

								<Fragment>
									{/* Intenté utilzarlo como componte aparte pero no podía cerrar el modal por algun motivo */}

									<Dialog size="lg" open={open} handler={() => setOpen(!open)}>
										<DialogHeader>Form JSON Data</DialogHeader>
										<DialogBody divider>{JSON.stringify(data)}</DialogBody>
										<DialogFooter>
											<Button
												variant="gradient"
												color="green"
												onClick={() => setOpen(!open)}
											>
												<span>Confirm</span>
											</Button>
										</DialogFooter>
									</Dialog>
								</Fragment>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default ContactForm;
