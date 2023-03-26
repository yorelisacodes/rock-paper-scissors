let botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper
document.getElementById("scissors").onclick=playerThrowsScissors
function playerThrowsRock(){
	
	checkWhoWon(getRandomWeapon(),"rock");
}
function playerThrowsScissors(){
	checkWhoWon(getRandomWeapon(),"paper")
}
function playerThrowsPaper(){
	checkWhoWon(getRandomWeapon(),"scissors")
}
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		botsWeapon=="scissors" && playersWeapon=="paper" ||
		botsWeapon=="paper" && playersWeapon=="rock" ||
		botsWeapon=="rock" && playersWeapon=="scissors"
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Good Job! you won!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}