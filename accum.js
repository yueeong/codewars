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

console.log(getSum(2, -1));

function list(names) {
    var arr = [];
    for (var x in names) {
        arr.push(names[x].name);
    }

    str = "";
    if ( arr.length === 2) {
        console.log("yea 2");
        str += arr[0] + " & " + arr[1];
    }
    else if (arr.length === 1) {
        console.log("yea 1");
        str = arr[0];
    }
    else if ( arr.length > 2) {
        console.log("yea 3 or more");
        for (var f in arr) {
            if ( x < arr.length-2) {
                str += arr[x] + ", ";
            }
            else if (x < arr.length-1) {
                str += arr[x] + " & ";
            }
            else if (x == arr.length-1) {
                str += arr[x];
            }
        }
    }
    return str;
}
var names = [{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Lisa'
}, {
    name: 'Lisa'
}, {
    name: 'Lisa'
}];

var g = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}];
console.log(list(g));
