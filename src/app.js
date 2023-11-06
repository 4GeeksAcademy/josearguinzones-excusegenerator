
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function aleatorio(who,action,what,when) {
var rand_who  = Math.floor(Math.random()*who.length);
var rand_action  = Math.floor(Math.random()*action.length);
var rand_what = Math.floor(Math.random()*what.length);
var rand_when  = Math.floor(Math.random()*when.length);

// return document.getElementById('excuse').innerHTML="<p>"+who[rand_who]+" "+action[rand_action]+" "+what[rand_what]+" "+when[rand_when]+"</p>";
return console.log(who[rand_who]+" "+action[rand_action]+" "+what[rand_what]+" "+when[rand_when]);

}

aleatorio(who,action,what,when);
