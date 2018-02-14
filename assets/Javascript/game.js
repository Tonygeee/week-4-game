$(document).ready(function() {
	var diamond, emerald, quartz, saphire;
	var wins = 0;
	var losses = 0;
	var randomNum = Math.floor(Math.random() * 101) + 19;
	var count = 0;
	var startGame = function() {
		saphire = Math.floor((Math.random() * 12) + 1);
		diamond = Math.floor((Math.random() * 12) + 1);
		emerald = Math.floor((Math.random() * 12) + 1);
		quartz = Math.floor((Math.random() * 12) + 1);
		randomNum = Math.floor((Math.random() * 108) + 17);
		$("#randomNum").text(randomNum);
		$("#count").text(" " + count);
	};
	startGame();
	$("#diamond").click(function() {
		count = count + diamond;
		$("#count").text(" " + count);
		winLoss();
	});
	$("#quartz").click(function() {
		count = count + quartz;
		$("#count").text(" " + count);
		winLoss();
	});
	$("#emerald").click(function() {
		count = count + emerald;
		$("#count").text(" " + count);
		winLoss();
	});
	$("#saphire").click(function() {
		count = count + saphire;
		$("#count").text(" " + count);
		winLoss();
	});

	function winLoss() {
		if (count === randomNum) {
			alert("You win!!!");
			wins = wins + 1;
			$("#wins").text("Wins: " + wins);
			clear();
		} else if (count > randomNum) {
			alert("You suck!!!");
			losses = losses + 1;
			$("#losses").text("Losses: " + losses);
			clear();
		}
	}

	function clear() {
		count = 0;
		randomNum = 0;
		$("#count").text(count);
		startGame();
	}
});
