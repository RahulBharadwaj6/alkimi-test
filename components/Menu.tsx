"use client";
import React, { useEffect } from "react";
import Slider from "./Slider";
import Link from "next/link";
import addRemoveOverFlow from "@/utils/addRemoveOverFlow";
interface MyComponentProps {
	openMenu: boolean;
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu: React.FC<MyComponentProps> = ({ openMenu, setOpenMenu }) => {
	return (
		<div className="z-50 flex flex-col w-full h-full bg-black left-0 fixed">
			<div className="flex flex-col px-8 py-8">
				<ul className="py-2 flex flex-col gap-2">
					<li className="font-semibold">
						<Link
							onClick={() => {
								addRemoveOverFlow(openMenu);
								setOpenMenu(!openMenu);
							}}
							href="/aboutus"
						>
							About Us
						</Link>
					</li>
					<li className="font-semibold">
						<Link
							onClick={() => {
								addRemoveOverFlow(openMenu);
								setOpenMenu(!openMenu);
							}}
							href="/contact"
						>
							Contact Us
						</Link>
					</li>
					<li className="font-semibold">
						<Link
							onClick={() => {
								addRemoveOverFlow(openMenu);
								setOpenMenu(!openMenu);
							}}
							href="/download"
						>
							Download
						</Link>
					</li>
					<li className="font-semibold">
						<Link
							onClick={() => {
								addRemoveOverFlow(openMenu);
								setOpenMenu(!openMenu);
							}}
							href="/careers"
						>
							Careers
						</Link>
					</li>
				</ul>
			</div>
			<div className="fixed bottom-0">
				<Slider />
			</div>
		</div>
	);
};
export default Menu;
