var A = 50;
var B = 200;

if (30 > 50)
	console.log(A);
if (20 > 10)
	console.log(B);	

var age = parseInt(prompt("digite sua idade"));
if (age >= 65) {
	document.body.append("voce é velho");
} else {
	if (age >=18) {
		document.body.append("você é maior de idade");
 	} else {
		if (age <=12) {
			document.body.append("voce é criança");
 		} else {
 			document.body.append("voce é adolescente");
 		}
  	}
}