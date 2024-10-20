import React, { useContext, useEffect, useState } from "react";
import { InterestsContext } from "../../contexts/Interests";

function Home() {
	const { selectedInterests } = useContext(InterestsContext);

	useEffect(() => {
		console.log(selectedInterests);
	}, [selectedInterests]);

	return (
		<>
			<h2 className="text-lg font-semibold mb-4">Welcome to Oaxaca!</h2>
			<p>Here are your selected interests:</p>
			<ul className="list-disc list-inside mt-2">
				{selectedInterests.length > 0 ? (
					selectedInterests.map((interest, index) => (
						<li key={index} className="text-gray-700">
							{interest}
						</li>
					))
				) : (
					<p>
						No interests selected. Please select your interests in the
						onboarding.
					</p>
				)}
			</ul>
		</>
	);
}

export default Home;
