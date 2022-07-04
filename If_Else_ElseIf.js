// print when to wake up according to days
// mon - 7am
// tue-thur - 6am
// fri -5am
// sat-sun 8am

let days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

today = "sat"
if (today === days[0]){
    console.log("wake up at 7am")
}
else if(today === days[1] || today === days[2] || today === days[3]){
    console.log("wake up at 6am")
}
else if(today === days[4]){
    console.log("wake up at 5am")
}
else{
    console.log("wake up at 8am")
}