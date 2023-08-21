export default function addRemoveOverFlow(isTrue: boolean) {
	let root = document.getElementsByTagName("html")[0];
	if (!isTrue) {
		document.body.classList.add("overflow-y-hidden");
		root.classList.add("overflow-y-hidden");
	} else {
		document.body.classList.remove("overflow-y-hidden");
		root.classList.remove("overflow-y-hidden");
	}
}
