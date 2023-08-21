"use client";
import React, { useState } from "react";
import expand from "../public/images/plus.svg";
import collapse from "../public/images/minus.svg";
import Image from "next/image";

const AccordionSection: React.FC = () => {
	const [id, setId] = useState<number>();
	const accordionList = [
		{
			id: 1,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 2,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 3,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 4,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 5,
			header: "Lorem ipsum dolor sit amet",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
	];

	const handleItemClick = (index: number) => {
		if (index === id) {
			setId(-1);
		} else {
			setId(index);
		}
	};
	return (
		<div className="px-[12px] py-[60px] md:px-[200px] md:py-[100px]">
			<div className="flex justify-center mb-16">
				<span className="text-5xl font-semibold">LOREM IPSUM DOLOR</span>
			</div>
			{accordionList?.map((item, index) => {
				return (
					<div key={item.id} className="flex flex-col">
						<div
							className={`flex justify-between cursor-pointer md:px-4 ${
								id === index &&
								"md:bg-gradient-to-r from-violet-500 to-fuchsia-500"
							}`}
							onClick={() => handleItemClick(index)}
						>
							<span className="my-2">{item?.header}</span>
							<Image
								src={id === index ? collapse : expand}
								width={17}
								height={17}
								alt="expand or collapse"
							/>
						</div>
						{id === index && (
							<span className="opacity-50 my-4 md:px-4">{item?.body}</span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default AccordionSection;
