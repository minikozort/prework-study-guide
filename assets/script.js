const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
for (let x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}

if (topics === 'HTML') {
 console.log("Let's study HTML!");
} else if (topics === 'CSS') {
 console.log("Let's study CSS!");
} else if (topics === 'Git') {
 console.log("Let's study Git!");
} else if (topics === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
function listtopics() {
 for (let x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }

console.log ("Here are the topics we learned through Prework:");
listtopics();
console.log("Which topic should we study first?");
selecttopics();
}
