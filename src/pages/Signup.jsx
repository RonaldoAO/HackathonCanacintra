import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
		form.resetFields();
		navigate("/onboarding");
	};
	return (
		<div className=" flex mx-4 justify-center min-h-screen items-center ">
			<div>
				<h2 className="text-xl font-bold mb-3">Sign up</h2>
				<Form
					form={form}
					layout="vertical"
					name="signupForm"
					onFinish={onFinish}
					className="w-full"
				>
					<Form.Item
						label="Nombre"
						name="name"
						rules={[
							{
								required: true,
								message: "Please enter your name",
							},
						]}
						children={
							<input
								type="text"
								placeholder="Enter your name"
								className="input w-full max-w-xs input-bordered"
							/>
						}
					></Form.Item>

					<Form.Item
						label="Email"
						name="email"
						children={
							<input
								type="email"
								placeholder="Enter your email"
								className="input w-full max-w-xs input-bordered"
							></input>
						}
						rules={[
							{
								required: true,
								message: "Please enter your email",
							},
							{
								type: "email",
								message: "Please enter a valid email",
							},
						]}
					></Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Password is required",
							},
						]}
						children={
							<input
								type="password"
								placeholder="Enter your password"
								className="input w-full max-w-xs input-bordered"
							/>
						}
					></Form.Item>

					<Form.Item>
						<button type="submit" className="btn btn-wide btn-primary">
							Sign up
						</button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Signup;
