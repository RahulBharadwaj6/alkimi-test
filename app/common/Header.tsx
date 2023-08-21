"use client";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import React, { useState } from "react";
import useWindowSize from "@/utils/windowResize";
import hamburger from "../../public/images/menu.svg";
import Menu from "../../components/Menu";
import closeIcon from "../../public/images/x-close.svg";
import { useRouter } from "next/navigation";
import addRemoveOverFlow from "@/utils/addRemoveOverFlow";

const Header: React.FC = () => {
	const router = useRouter();
	const size = useWindowSize();
	const [openMenu, setOpenMenu] = useState(false);
	const handleHomeClick = () => {
		router.push("/");
	};
	const handleMenuClick = () => {
		addRemoveOverFlow(!openMenu);
		setOpenMenu(!openMenu);
	};
	return (
		<div className="flex justify-between p-4">
			<div
				className="flex items-center cursor-pointer"
				onClick={() => {
					handleHomeClick();
				}}
			>
				<Image src={logo} alt="logo" width={30} height={18} className="mr-2" />
				<span className="font-medium text-base">
					{openMenu ? "Menu" : "Lorem"}
				</span>
			</div>
			{size.width < 768 && (
				<div>
					<Image
						src={openMenu ? closeIcon : hamburger}
						alt="menu"
						width={30}
						height={18}
						className="mr-2"
						onClick={() => handleMenuClick()}
					/>
					{openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
				</div>
			)}
		</div>
	);
};

export default Header;
