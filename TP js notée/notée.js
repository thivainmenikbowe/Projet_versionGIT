function multiplication(){
    var a = document.getElementById("p1").value;
    var b = document.getElementById("q1").value;

    var c = document.getElementById("p2").value;
    var d = document.getElementById("q2").value;

    var e = document.getElementById("p3").value;
    var f = document.getElementById("q3").value;

    var g = Number(a)*Number(b);
    var h = Number(c)*Number(d);
    var i = Number(e)*Number(f);

    r1.value = g;
    r2.value = h;
    r3.value = i;

    var t =g+h+i;
    result.value =t
}

