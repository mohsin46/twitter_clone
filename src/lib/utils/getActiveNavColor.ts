export const getActiveNavColor = (active: boolean) => {
	let fill: '#1DA1F2' | '#000000';
	if (active) {
		fill = '#1DA1F2';
	} else {
		fill = '#000000';
	}
	return fill;
};
