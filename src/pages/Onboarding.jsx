import React, { useContext, useState } from "react";
import { Checkbox, Button, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import { InterestsContext } from "../contexts/Interests";

const Onboarding = () => {
	// const [selectedInterests, setSelectedInterests] = useState([]);
	const [messageApi, contextHolder] = message.useMessage();
	const { selectedInterests, setSelectedInterests } = useContext(InterestsContext);
	const navigate = useNavigate();

	const interests = [
		"Local crafts",
		"Mezcal route",
		"Gastronomy",
		"Magical towns",
		"Traditional dances",
		"Regional music",
		"Exploration of archaeological sites",
		"Ecotourism routes",
		"Museums and galleries",
		"Ceramics",
		"Sculptures",
	];

	const toggleInterest = (interest) => {
		if (selectedInterests.includes(interest)) {
			setSelectedInterests(selectedInterests.filter((i) => i !== interest));
		} else {
			setSelectedInterests([...selectedInterests, interest]);
		}
	};

	const handleContinue = () => {
		if (selectedInterests.length === 0) {
			messageApi.open({
				type: "warning",
				content: "Please select at least one interest",
			});
			return;
		}
		console.log("Selected Interests:", selectedInterests);
		navigate("/home"); // Redirigir al home o la siguiente vista después del onboarding
	};
	return (
		<div className="flex flex-col min-h-screen max-w-lg mx-auto  ">
			{contextHolder}
			<h2 className="text-center text-primary-content text-xl font-bold sticky top-0  pt-7 pb-3 ">
				Select your interest
			</h2>
			<div className="flex-1 py-4">
				<div className="flex flex-wrap gap-2 mx-4 text-sm">
					{interests.map((interest) => (
						<div
							key={interest}
							className={`badge badge-md cursor-pointer py-3 text-center border rounded-lg ${
								selectedInterests.includes(interest)
									? "bg-secondary"
									: "bg-gray-100"
							}`}
							onClick={() => toggleInterest(interest)}
						>
							{interest}
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col justify-center p-4 bottom-0 sticky">
				{selectedInterests.length < 1 && (
					<p className="text-start text-neutral text-sm my-2">
						Select at least one interest
					</p>
				)}
				<button
					className="btn btn-primary w-full "
					onClick={handleContinue}
					disabled={selectedInterests.length === 0}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Onboarding;
