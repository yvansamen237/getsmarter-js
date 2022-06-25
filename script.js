let a,b,c;
a= parseInt (prompt('entrer a'));
b= parseInt (prompt('entrer b'));
c= parseInt(prompt('entrer c'));
let delta = Math.pow(b, 2) - 4*(a*c);
let x1 = ((-b) - Math.sqrt(delta))/(2*a);
let x2 = ((-b) + Math.sqrt(delta))/(2*a);
console.log(x1, 'et', x2);
console.log (delta);