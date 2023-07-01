window.onload = () => {
	PetiteVue.createApp({
		videos: [
			{
				file: "sbsbcnm.mp4",
				title: "傻逼傻逼操你妈",
			},
			{
				file: "sbsbcnm2.mp4",
				title: "楼上的下来给我举报了它",
			},
			{
				file: "sbsbcnm3.mp4",
				title: "波奇给我举报了它",
			},
			{
				file: "stznsln.mp4",
				title: "三天之内sha了你",
			},
			{
				file: "cnmd2.mp4",
				title: "黑手哥齐声操你妈",
			},
			{
				file: "hn1.mp4",
				title: "马勒戈壁你骂河南人",
			},
			{
				file: "hn2.mp4",
				title: "靠你娘你骂哪里人都可以",
			},
			{
				file: "fs.mp4",
				title: "佛说：三天之内",
			},
			{
				file: "hj1.mp4",
				title: "嘴臭大合集",
			},
			{
				file: "hnrdss.mp4",
				title: "荷兰人都是神",
			},
			{
				file: "sbsbcnm-full.mp4",
				title: "傻逼傻逼操你妈-较全",
			},
		],
		active: 0,
		isPlay: false,
		listIsShow: false,

		mounted() {
			this.active = random(0, this.videos.length - 1);

			this.$refs.video.addEventListener("play", () => {
				this.isPlay = true;
			});

			this.$refs.player.addEventListener("click", () => {
				if (!this.isPlay) this.play();
			});

			this.$refs.video.addEventListener("ended", () => {
				this.next();
			});

			this.play();
		},

		play() {
			this.$refs.video
				.play()
				.then((a) => {})
				.catch((e) => {
					console.log("妈的，自动放不了，操");
				});
		},

		next() {
			let ii;
			do {
				ii = random(0, this.videos.length - 1);
			} while (ii === this.active);
			this.active = ii;
			this.play();
		},
	}).mount("body");
};
//
// let i;
//
// let isClickPlay = false;
// document.addEventListener("click", clickToPlay);
// document.getElementsByTagName("video")[0].addEventListener("click", clickToPlay);
// document.getElementsByTagName("video")[0].addEventListener("ended", nextVideo);
//
// nextVideo();

function nextVideo() {
	if (location.pathname.substring(1) && location.pathname.substring(1) < videos.length) {
		i = location.pathname.substring(1);
	} else {
		let ii;
		do {
			ii = random(0, videos.length - 1);
		} while (ii === i);
		i = ii;
	}
	document.getElementsByTagName("video")[0].src = "/videos/" + videos[i];
	console.log(i);
	document.getElementsByTagName("video")[0].play();
}

function clickToPlay() {
	document.getElementsByTagName("video")[0].play();
	document.getElementsByTagName("video")[0].style.pointerEvents = "";
	isClickPlay = true;
}

function random(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}
