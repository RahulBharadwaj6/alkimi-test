import Image from "next/image";
import React from "react";
import shield from "../public/images/shield.svg";
import dataFlow from "../public/images/dataflow.svg";
import bottomSectionImg from "../public/images/bottom-section-img.svg";
import barChart from "../public/images/bar-chart.svg";

const BottomSection: React.FC = () => {
	return (
		<div className="px-[12px] py-[60px] md:px-[200px] md:py-[100px]">
			<div className="flex flex-col">
				<span className="text-5xl font-semibold">LOREM IPSUM</span>
				<span className="text-5xl font-semibold">DOLOR SET</span>
			</div>
			<div className="md:flex mt-4">
				<div className="flex flex-col basis-1/3">
					<span className="mt-8 md:mt-0 font-semibold">LOREM IPSUM DOLOR</span>
					<span className="mt-4 opacity-50">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</span>
					<Image
						className="mt-4"
						src={shield}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
				<div className="mt-8 md:mt-0 flex flex-col basis-1/3">
					<span className="mt-8 md:mt-0 font-semibold">DOLOR SIT</span>
					<span className="mt-4 opacity-50">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</span>
					<Image
						className="mt-4"
						src={dataFlow}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
			</div>
			<div className="md:flex mt-8 justify-end">
				<Image
					className="basis-1/3"
					src={bottomSectionImg}
					alt="section-one"
					width={200}
					height={200}
				/>
				<div className="mt-8 md:mt-0 flex flex-col basis-1/3 ml-2">
					<span className="mt-8 md:mt-0 font-semibold">DOLOR SIT</span>
					<span className="mt-4 opacity-50">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</span>
					<Image
						className="mt-4"
						src={barChart}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
			</div>
		</div>
	);
};

export default BottomSection;
