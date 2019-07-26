var Animal= prompt("Digite nome animal");
var animalselected="";
if (Animal==="Gato"){
	animalselected="Cat";
}else if (Animal==="Cachorro"){
	animalselected="Dog";
}else if (Animal==="Passaro"){
	animalselected="Bird";
}else if (Animal==="Sapo"){
	animalselected="Frog";
}else if (Animal==="Leao"){
	animalselected="Lion";
}else if (Animal==="Cavalo"){
	animalselected="Horse";
}
	
if (animalselected===""){
	document.body.append("Sorry, I Couldn't find this animal!!!!")
}else{
	document.body.append("This animal in english is "+animalselected);}

