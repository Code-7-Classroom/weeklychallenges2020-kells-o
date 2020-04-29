function min(argue1, argue2) {
    if (argue1 > argue2) {
        return argue2;
    }

    else if (argue1 < argue2) {
        return argue1;
    }

    else  {
        return ('They are equal');
    }
}
console.log(min(4,7))

// var  minimum = min(4,7)