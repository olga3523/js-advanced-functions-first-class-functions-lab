// Code your solution in this file!
function returnFirstTwoDrivers() {
    return ['Sally', 'Bob'];
}
function returnLastTwoDrivers() {
    return ['Freddy', 'Claudia'];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a) {
    return () => { return a * a };
}

function fareDoubler(a) {
    return a * 2;
}

function fareTripler(a) {
    return a * 3;
}

function selectDifferentDrivers(d, f) {
    return f();
}