图们 = [
	"/assets/img/girigiri-love/a15b4afegw1f3i4kc8nzsg208c08c400.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3i4kc8nzsg208c08c400.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3i4kbwhkpg20dw07ab29.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3i4jywgpsg208704x4p4.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3i4jry4y1g204603j13s.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3i4jmrh8gg202q02cglu.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3i4jlx3mfg208c04rnkl.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3i4ivflpdg204603wk18.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3ihs5gbl8g203z03nta8.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3im4yx0n6g206e07348j.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3jn6mk7m9g202s02sq40.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3od8rgbjbg206r04wk6a.gif",
	"/assets/img/girigiri-love/a15b4afegw1f3iag4xbu3g206o07qtja.gif",
];

歌词 =
	"ギリギリ爱 いけないボーダーライン 難易度Gでも 全て壊してみせる キリキリ舞 さらなるGへと 意識が溶ける 体は制御不能 イッちゃうかもね ふざけあった友達と 求めあったあの人と";

歌词 = 歌词.split(" ");

随机色们 = "yellow orange blue red green".split(" ");
随机颜色 = function () {
	return 随机色们[Math.floor(随机色们.length * Math.random())];
};

girigiri = function () {
	var div = document.createElement("div");
	div.innerHTML = 歌词[Math.floor(歌词.length * Math.random())] + "*" + 获取打靠总数();
	div.style.cssText = "top:" + Math.random() * 90 + "%;left:" + Math.random() * 90 + "%;color:" + 随机颜色();
	document.body.appendChild(div);
	setTimeout(function () {
		div.className = "girigiri";
	}, 1);
	setTimeout(function () {
		document.body.removeChild(div);
	}, 2000);

	n.dir += +n.getAttribute("dir") + 1;
};

更换背景 = function () {
	html.style.cssText = "background-image:url(" + 图们[Math.floor(图们.length * Math.random())] + ")";
};

更换背景();

setInterval(更换背景, 15000);

D = document;
全屏 = function () {
	var o = html;
	if (D.fullscreenElement || D.webkitFullscreenElement || D.mozFullScreenElement || D.msFullScreenElement) {
		D.exitFullscreen
			? D.exitFullscreen()
			: D.mozCancelFullScreen
			? D.mozCancelFullScreen()
			: D.webkitExitFullscreen
			? D.webkitExitFullscreen()
			: D.msExitFullscreen
			? D.msExitFullscreen()
			: "";
	} else {
		o.requestFullscreen
			? o.requestFullscreen()
			: o.mozRequestFullScreen
			? o.mozRequestFullScreen()
			: o.webkitRequestFullscreen
			? o.webkitRequestFullscreen()
			: o.msRequestFullscreen
			? o.msRequestFullscreen()
			: "";
	}
};

全屏显示.onclick = 全屏;
var 初次播放 = 0;
FM.onplay = function () {
	初次播放 = 1;
};

document.body.ontouchstart = function () {
	document.body.ontouchstart = null;
	if (!初次播放) {
		FM.play();
	}
};

FM.src = "/assets/sound/kirikiri.m4a";
FM.play();

播放次数 = 0;
FM.onended = function () {
	播放次数++;
	//cNz("播放*" + 播放次数);
};
分享毒品.onclick = function () {
	alert("废了");
};

var 次数 = 0;
发送 = function () {
	//cNz("ギリギリ爱!!*" + 次数);
	次数 = 0;
};
var T;
btn.onclick = function () {
	girigiri();
	次数++;
	clearTimeout(T);
	T = setTimeout(发送, 3000);

	if (window.localStorage) {
		window.localStorage.calllll = +(window.localStorage.calllll || 0) + 1;
	}
};

获取打靠总数 = function () {
	return window.localStorage && window.localStorage.calllll ? window.localStorage.calllll : 1;
};

上次靠数 = 0;
两次之间差 = 50;

按照上十秒速度虚拟打靠 = function (num) {
	n.dir += Math.floor(+n.getAttribute("dir") + num);
};
setInterval(function () {
	//按照上十秒速度虚拟打靠(两次之间差/40);
	按照上十秒速度虚拟打靠(200 / 40);
}, 10000 / 40);

歌词文本 = `[ti:いけないボーダーライン]
[ar:ワルキューレ]
[al:いけないボーダーライン - Single]
[00:00.00]
[00:35.00]見つめあって恋をして 無我夢中で追いかけて
[00:42.00]だけどもっと知りたくてメラメラしてる
[00:47.50]願うほど謎は増え 思うほど熱になる
[00:52.00]だからもっととびこむの未開の世界
[01:00.50]恋とか夢とか誰でも信じるけど
[01:06.50]そこそこ攻めなきゃつまんないよ
[01:12.00]ギリギリ爱 いけないボーダーライン
[01:17.50]難易度Gでも全て壊してみせる
[01:24.00]ギリギリ舞 さらなるGへと
[01:29.00]意識は溶ける 体は制御不能
[01:35.00]いっちゃうかもね
[01:40.00]
[01:50.00]ふざけあった友達と求めあったあの時と
[01:57.00]また会える日のためにキラキラしてる
[02:03.00]光るほど影は出来 燃えるほどhighになる
[02:08.00]走るほど見えてくる あぶないライン
[02:15.00]自由も平和も望めば生まれるけど
[02:21.00]モタモタしてたら腐っちゃうよ
[02:27.00]ギリギリ爱 あぶないボーダーレース
[02:32.00]非常識だね まだ加速しているよ
[02:39.00]ギリギリ舞
[02:42.00]限界点なら塗り替えていい
[02:47.00]破壊と再生から私は出来る
[02:54.00]
[03:13.00]ギリギリ爱 いけないボーダーライン
[03:19.00]難易度Gでも全て壊してみせる
[03:25.00]ギリギリ舞 さらなるGへと
[03:32.00]意識は溶ける 体は制御不能
[03:37.00]いっちゃうかもね
[03:40.50]ギリギリ爱 いけないボーダーライン
[03:46.70]燃え尽きながらまだ輝いてみせる
[03:50.70]ギリギリ舞 あなたのために
[03:57.50]未来のために何度砕け散っても
[04:05.00]愛することで生まれ変わる
[04:16.50]愛されたくて生きて帰る﻿`;
Lrc = (function (obj) {
	var lrc_arr = [],
		interval,
		上次时间 = 0,
		Lrc = {
			num: 0,
			load: function (id) {
				//ajax('/javascript/comet.php?lrc='+id,0,function(txt){
				var txt_arr = 歌词文本.split("\n");
				clearTimeout(interval);
				obj.innerHTML = "";
				Lrc.num = 0;
				lrc_arr = [];
				for (var i in txt_arr) {
					var _time = txt_arr[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g),
						_txt = txt_arr[i].replace(/\[[0-9:.]{5,8}\]/g, "");
					for (var _i in _time) {
						var _t_text = String(_time[_i]);
						lrc_arr.push([
							Number(_t_text.match(/\[([0-9]{2})/)[1]) * 60 +
								Number(_t_text.match(/\:([0-9]{2})/)[1]) +
								Number(_t_text.match(/([0-9]{2})\]/)[1]) * 0.01666,
							_txt,
						]);
					}
				}

				lrc_arr.sort(function (a, b) {
					return a[0] < b[0] ? -1 : 1;
				});
				interval = setTimeout(function () {
					Lrc.step();
				}, 200);
				//});
			},
			step: function () {
				if (!FM || !FM.currentTime) {
					clearTimeout(interval);
					interval = setTimeout(Lrc.step, 200);
				}
				var Song_time = FM.currentTime;

				if (FM.currentTime - 上次时间 < -1) {
					Lrc.num = 0;
				}

				上次时间 = FM.currentTime;

				for (var _i = Lrc.num, _l = lrc_arr.length; _i < _l; _i++) {
					if (lrc_arr[_i][0] < Song_time) {
						obj.innerHTML = lrc_arr[_i][1].replace(/\s+/, "<br>");
						Lrc.num++;
					} else {
						break;
					}
				}

				clearTimeout(interval);
				interval = setTimeout(Lrc.step, 200);
			},
		};
	return Lrc;
})(lrc);
if (!navigator.userAgent.match(/ip(hone|ad|od)/i)) Lrc.load();

鬼畜加速.onclick = function () {
	switch (this.innerHTML) {
		case "鬼畜加速":
			FM.playbackRate = 1.2;
			this.innerHTML = "疯狂加速";
			break;
		case "疯狂加速":
			FM.playbackRate = 1.4;
			this.innerHTML = "深度加速";
			break;
		case "深度加速":
			FM.playbackRate = 1.6;
			this.innerHTML = "无药可救";
			break;
		case "无药可救":
			FM.playbackRate = 2;
			this.innerHTML = "💊💊💊";
			break;
		case "💊💊💊":
			FM.playbackRate = 3;
			this.innerHTML = "💊💊💊💊";
			break;
		case "💊💊💊💊":
			FM.playbackRate = 1;
			this.innerHTML = "鬼畜加速";
			break;
	}
};

鬼畜告急文案 =
	"Q：我说这背景图是不是太无聊了点？\n是不是应该勤换换？\n\nA:有合适的你发过来呀？ \n\n 要求：\n1. 必须足够鬼畜\n2. 比如带全屏银光棒/大量抖动 \n\n💊💊💊💊💊\n邮箱: i@front.org \n或者直接拖拽到: http://x.mouto.org/wb/";
免费邮箱文案 =
	"@girigiri.love 域名邮箱免费申请。域名邮箱依托于腾讯域名邮箱服务，需绑定 QQ 数字账号使用。 \n\n附带: \n 1. 可收件的QQ数字账号邮箱（太多人不发这个了。。） \n 2.你想要的邮箱前缀（特别短也是可以的！！） \n\n 以邮件形式发送到 i@front.dog \n\n很多人反馈激活邮件的按钮无法点击，这时可以更换浏览器再做尝试！\n\n如果我这面通过确认会再发一封邮件告知我已在后台添加了邮箱，这时没有收到腾讯邮箱的确认信果断联系我重发";

console.log("托管于 主机壳<http://zhujike.com/>");
console.log("开发组 少女计划<http://sojo.im>");
console.log("赞助 鲁迅追番<http://luxun.pro>");
console.log("鲁迅追番讨论组 302415425");
//console.log(免费邮箱文案);
console.log("%c" + 鬼畜告急文案, "color:red;font-size:1.5em;");
