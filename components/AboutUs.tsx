"use client";
import Image from "next/image";
import aboutUs from "../public/images/about-us-img.svg";
import React, { useEffect, useState } from "react";
import useWindowSize from "@/utils/windowResize";

const AboutUs: React.FC = () => {
	const size = useWindowSize();

	return (
		<div className="px-[12px] py-[20px] md:px-[200px] md:py-[100px] md:flex items-center hover:bg-[url('../public/images/about-us-background.svg')]">
			{size.width > 768 && (
				<div className="flex flex-col basis-1/2">
					<span className="text-6xl font-semibold">ABOUT</span>
					<div className="flex">
						<span className="text-6xl font-semibold">US</span>
						<Image
							className="rounded-full"
							src={aboutUs}
							alt="about us"
							width={320}
							height={320}
						/>
					</div>
				</div>
			)}
			{size.width < 768 && (
				<div>
					<span className="text-5xl font-semibold">LOREM IPSUM</span>
					<div className="flex flex-col">
						<span className="mb-2 mt-2">Instagram</span>
						<span>LinkedIn</span>
					</div>
				</div>
			)}
			<div className="md:py-0 py-4 basis-1/2">
				<span className="opacity-50">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</span>
			</div>
		</div>
	);
};

export default AboutUs;
