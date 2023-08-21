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
	const handleMenuClick = () => {
		let root = document.getElementsByTagName("html")[0];
		if (!openMenu) {
			document.body.classList.add("overflow-y-hidden");
			root.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
			root.classList.remove("overflow-y-hidden");
		}
		setOpenMenu(!openMenu);
	};
	return (
		<div className="z-50 flex flex-col w-full h-full bg-black left-0 fixed">
			<div className="flex flex-col px-8 py-8">
				<ul className="py-2 flex flex-col gap-2">
					<li className="font-semibold">
						<Link
							onClick={() => {
								handleMenuClick();
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
								handleMenuClick();
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
								handleMenuClick();
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
								handleMenuClick();
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
