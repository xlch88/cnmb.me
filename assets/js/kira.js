let interval;
let kira = document.getElementById("kira");
let ctx = kira.getContext("2d");

kira.onclick = () => {
	document.body.classList.add("tips");
};

window.start = (colors) => {
	let color_index = 0;
	let time = document.getElementById("ms").value;

	clearInterval(interval);
	document.body.classList.remove("tips");

	interval = setInterval(() => {
		kira.width = window.innerWidth;
		kira.height = window.innerHeight;

		ctx.fillStyle = colors[color_index];
		ctx.fillRect(0, 0, kira.width, kira.height);

		color_index++;
		if (color_index >= colors.length) color_index = 0;
	}, time);
};
