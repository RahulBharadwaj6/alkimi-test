import React from "react";

const Slider: React.FC = () => {
	const keyframes = `
        @keyframes slide {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
        }
    `;
	return (
		<div className="whitespace-nowrap overflow-hidden py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
			<div className="inline-block animate-slide">
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
			</div>
			<div className="inline-block animate-slide">
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
				<span className="px-2">Lorem Ipsum</span>
			</div>
		</div>
	);
};

export default Slider;
