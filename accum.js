function accum(s) {
    newstr = "";
    for (var x in s) {

        newstr += s[x].toUpperCase();
        newstr += s[x].toLocaleLowerCase().repeat(parseInt(x));
        if (x < s.length - 1) {
            newstr += "-";
        }

    }
    return newstr;
}

function getMiddle(s) {
    if (s.length % 2 === 0) {
        console.log("even");
        midIdx = s.length / 2;
        return s[midIdx - 1] + s[midIdx];

    } else {
        midIdx = Math.floor(s.length / 2);
        return s[midIdx];
    }
}

function getSum(a, b) {
    function add(x, y) {
        return x + y;
    }
    var arr = [];

    if (a == b) {
        return a;
    } else if (a < b) {
        console.log("a less b");

        for (count = a; count <= b; count++) {
            arr.push(count);
        }
        return arr.reduce(add, 0);
    } else if (a > b) {
        console.log("a gret b");

        for (count = b; count <= a; count++) {
            arr.push(count);
        }
        return arr.reduce(add, 0);
    }
}

console.log(getSum(6, -1));

function list(names) {
    function catThemUp(a, b) {
        return a.name + ',' + b.name;
    }
    for (var x in names) {
        console.log(names[x].name);
    }
    return names.reduce(catThemUp, 0);

}
var names = [{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Maggie'
}, {
    name: 'Homer'
}];
console.log(list(names));
