window.onload = () => {
	console.log("日了");
	PetiteVue.createApp({
		资源列表: [
			{
				file: "/assets/video/cat/1601892203378659329-14bSRUaMD3aucRs_.mp4",
				type: "video",
				preview: "/assets/img/cat/video-preview/1.png",
			},
			{
				file: "/assets/video/cat/IMG_6713.MP4",
				type: "video",
				preview: "/assets/img/cat/video-preview/2.png",
			},
			{
				file: "/assets/video/cat/IMG_6714.MP4",
				type: "video",
				preview: "/assets/img/cat/video-preview/3.png",
			},
			{ file: "/assets/img/cat/1499110257062461440-FM3o0_uagAA8Ui1.jpg", type: "photo" },
			{ file: "/assets/img/cat/1505366313795198976-FOQirG9aQAI2zwC.jpg", type: "photo" },
			{ file: "/assets/img/cat/1505366313795198976-FOQirHAaIAA6DWZ.jpg", type: "photo" },
			{ file: "/assets/img/cat/1505946594331414530-FOYyb3AakAAkNxN.jpg", type: "photo" },
			{ file: "/assets/img/cat/1511404360512970755-FPmWP7uaAAAClCa.jpg", type: "photo" },
			{ file: "/assets/img/cat/1513556680910401537-FQE7w7zacAEBnLU.jpg", type: "photo" },
			{ file: "/assets/img/cat/1513556680910401537-FQE7w7zakAAI06b.jpg", type: "photo" },
			{ file: "/assets/img/cat/1513556680910401537-FQE7w9faQAARpHO.jpg", type: "photo" },
			{ file: "/assets/img/cat/1525806122694635520-FRpgUW_akAA6Z3o.jpg", type: "photo" },
			{ file: "/assets/img/cat/1582736172974907392-FfcCDZoUYAA4_fJ.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6672.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-21 6682.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-26 6693.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6703.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6673.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6683.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6694.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6704.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6674.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6685.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6695.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6705.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6675.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6686.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6696.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6706.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6676.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6687.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6697.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6707.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6677.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6688.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6698.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6708.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6678.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6689.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6699.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6709.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6679.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6690.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6700.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6710.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6680.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-22 6691.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6701.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-36 6711.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-17 6681.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-26 6692.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-31 6702.jpg", type: "photo" },
			{ file: "/assets/img/cat/23-07-06 09-01-40 6712.jpg", type: "photo" },
		],
		渲染: [],
		列: 4,

		mounted() {
			let 结果 = [];

			let 操 = 0;
			this.资源列表.forEach((v, i) => {
				if (结果[操] === undefined) {
					结果[操] = [];
				}

				结果[操].push(v);

				操 = 操 + 1;
				if (操 > this.列 - 1) {
					操 = 0;
				}
			});

			this.渲染 = 结果;

			console.log(结果);
		},
	}).mount("body");
};
