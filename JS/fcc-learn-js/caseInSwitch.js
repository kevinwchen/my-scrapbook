function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1: // case is like 'else if' statemnets
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default: // default is like the 'else' statement
            answer = "stuff";
            break;
    }
    return answer;
}


for (var i = 1; i <= 4; i++){
    console.log(caseInSwitch(i));
}