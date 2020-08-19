var fn=prompt("enter first name:")
var ln=prompt("enter last name:")
var age=prompt("enter age:")
var hgt=prompt("enter height:")
var nn=prompt("enter nick name:")
var fnc=false
var ageC=false
var hgtC=false
var nnc=false
if(fn[0]===ln[0])
fnc=true
if(age>=20 && age<=30)
ageC=true
if(hgt>=170)
hgtC=true
if(nn[nn.length-1]==="y")
nnc=true
if(fnc && nnc && hgtC && ageC)
alert("he or she is spy")
else
alert("not a spy")