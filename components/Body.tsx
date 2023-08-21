import React from "react";
import Image from "next/image";
import addUser from "../public/images/users-plus.svg";
import serverImg from "../public/images/server.svg";
import sectionOneImg from "../public/images/section-one-img.svg";
import target from "../public/images/target.svg";
import percent from "../public/images/percent.svg";
import chip from "../public/images/cpu-chip.svg";
import sectionTwoImg from "../public/images/section-two-img.svg";
import cube from "../public/images/cube.svg";

const Body: React.FC = () => {
	return (
		<main className="px-[12px] py-[60px] md:px-[200px] md:py-[100px] md:flex md:flex-col">
			<span className="text-5xl font-semibold">LOREM IPSUM</span>
			<div className="md:flex mt-8 md:flex-row flex-col">
				<div className="flex flex-col basis-0 md:basis-1/3 w-100">
					<span className="font-semibold">DOLOR SIT</span>
					<span className="mt-2 opacity-50">
						Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
						Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
						faucibus aliquet quis sed sed. Phasellus non at lacus convallis
						elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
						cras leo.
					</span>
					<Image
						className="mt-2"
						src={addUser}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
				<div className="mt-4 md:mt-0 flex flex-col basis-0 md:basis-1/3">
					<span className="font-semibold">DOLOR SIT</span>
					<span className="mt-2 opacity-50">
						Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
						Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
						faucibus aliquet quis sed sed. Phasellus non at lacus convallis
						elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
						cras leo.
					</span>
					<Image
						className="mt-2"
						src={serverImg}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
				<Image
					className="mt-8 md:mt-0 md:basis-1/3 basis-0"
					src={sectionOneImg}
					alt="section-one"
					width={200}
					height={200}
				/>
			</div>
			<div className="md:flex mt-8 md:justify-end">
				<div className="flex flex-col basis-1/3">
					<span className="font-semibold">DOLOR SIT</span>
					<span className="opacity-50 mt-2">
						Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
						Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
						faucibus aliquet quis sed sed. Phasellus non at lacus convallis
						elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
						cras leo.
					</span>
					<Image
						className="mt-2"
						src={target}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
			</div>
			<div className="md:flex md:mt-0 mt-8">
				<div className="flex flex-col basis-1/3">
					<span className="font-semibold">DOLOR SIT</span>
					<span className="opacity-50 mt-2">
						Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
						Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
						faucibus aliquet quis sed sed. Phasellus non at lacus convallis
						elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
						cras leo.
					</span>
					<Image
						className="mt-2"
						src={percent}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
				<div className="flex md:mt-0 mt-8 flex-col basis-1/3">
					<span className="font-semibold">DOLOR SIT</span>
					<span className="opacity-50 mt-2">
						Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
						Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
						faucibus aliquet quis sed sed. Phasellus non at lacus convallis
						elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
						cras leo.
					</span>
					<Image
						className="mt-2"
						src={chip}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
			</div>
			<div className="flex mt-8 md:justify-end md:flex-row flex-col">
				<Image
					className="basis-1/3"
					src={sectionTwoImg}
					alt="section-one"
					width={200}
					height={200}
				/>
				<div className="mt-8 md:mt-0 flex flex-col basis-1/3 ml-2">
					<span className="font-semibold">DOLOR SIT</span>
					<span className="opacity-50 mt-2">
						Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
						Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
						faucibus aliquet quis sed sed. Phasellus non at lacus convallis
						elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
						cras leo.
					</span>
					<Image
						className="mt-2"
						src={cube}
						alt="user-plus"
						width={20}
						height={18}
					/>
				</div>
			</div>
		</main>
	);
};

export default Body;
