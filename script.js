var score = 0;
const questions = [{
    ques : 'A complete graph can have',
    opt1 : 'n*2 spanning trees',
    opt2 : 'n*n  spanning trees',
    opt3 : 'n*(n-2)  spanning trees',
    opt4 : 'n*(n+1)  spanning trees',
    ans :  'n*(n-2)  spanning trees'
}, {
    ques : 'What is the full form of CSS',
    opt1 : 'HTML',
    opt2 : 'Java',
    opt3 : 'JavaScript',
    opt4 : 'None of these',
    ans : 'None of these'
}, {
    ques : 'How to include javaScript in HTML document',
    opt1 : 'link',
    opt2 : 'head',
    opt3 : 'script',
    opt4 : 'href',
    ans : 'script'
}, {
    ques : 'How to include variable in JavaScript',
    opt1 : 'int',
    opt2 : 'var',
    opt3 : 'String',
    opt4 : 'char',
    ans : 'var'
}, {
    ques : 'What => means in javaScript',
    opt1 : 'function',
    opt2 : 'Double function',
    opt3 : 'Arrow function',
    opt4 : 'implements',
    ans : 'Arrow function'
}, {
    ques : 'Which of these is not a javaScript framework',
    opt1 : 'Django',
    opt2 : 'NodeJs',
    opt3 : 'MongoDB',
    opt4 : 'JQuery',
    ans : 'Django'
}, {
    ques : 'How do you define objects in javaScript',
    opt1 : '()',
    opt2 : '{}',
    opt3 : '=',
    opt4 : '[]',
    ans :  '{}'
}, {
    ques : 'What\'s the output of 2 + "2" ?',
    opt1 : '22',
    opt2 : '4',
    opt3 : 'NaN',
    opt4 : 'error',
    ans : '22'
}, {
    ques : 'What\s the output of "2"-1 ?',
    opt1 : '21',
    opt2 : '3',
    opt3 : '1',
    opt4 : 'error',
    ans : '3'
}, {
    ques : 'How to check if a value is Nan in JavaScript',
    opt1 : 'isNan(val)',
    opt2 : 'val == NaN',
    opt3 : 'gives error of NaN',
    opt4 : 'val.equals(NaN)',
    ans : 'isNan(val)'
}];

var a = document.getElementById("start");
a.onclick = function() {
    document.getElementById("start").remove();
    startGame();
}

function startGame() {
    score = 0;

    var y = document.createElement("H4");
    y.setAttribute("id","ques");
    var q = document.createTextNode(" ");
    y.appendChild(q);

    var r1 = document.createElement("input");
    r1.setAttribute("type","radio");
    r1.setAttribute("id","op1");
    r1.setAttribute("value","one");
    var l1 = document.createElement("label");
    l1.setAttribute("for","one");
    l1.setAttribute("id","op-1");
    var n1 = document.createTextNode(" ");
    l1.appendChild(n1);

    var r2 = document.createElement("input");
    r2.setAttribute("type","radio");
    r2.setAttribute("id","op2");
    r1.setAttribute("value","two");
    var l2 = document.createElement("label");
    l2.setAttribute("for","two")
    l2.setAttribute("id","op-2");
    var n2 = document.createTextNode(" ");
    l2.appendChild(n2);

    var r3 = document.createElement("input");
    r3.setAttribute("type","radio");
    r3.setAttribute("id","op3");
    r3.setAttribute("value","three");
    var l3 = document.createElement("label");
    l3.setAttribute("for","three");
    l3.setAttribute("id", "op-3");
    var n3 = document.createTextNode(" ");
    l3.appendChild(n3);

    var r4 = document.createElement("input");
    r4.setAttribute("type","radio");
    r4.setAttribute("id","op4");
    r4.setAttribute("value","four");
    var l4 = document.createElement("label");
    l4.setAttribute("for","four");
    l4.setAttribute("id","op-4");
    var n4 = document.createTextNode(" ");
    l4.appendChild(n4);

    var g = document.createElement("p");
    g.setAttribute("id","Result");
    var h = document.createTextNode(" ");
    g.appendChild(h);

    var bt = document.createElement('button');
    bt.setAttribute("id","submit");
    var b = document.createTextNode("Submit");
    bt.appendChild(b);

    var btn = document.createElement('button');
    btn.setAttribute("id","next");
    var b1 = document.createTextNode("Next");
    btn.appendChild(b1);

    var temp = document.getElementById("my-div");
    temp.appendChild(y);
    temp.appendChild(document.createElement("br"));
    temp.appendChild(r1);
    temp.appendChild(l1);
    temp.appendChild(document.createElement("br"));
    temp.appendChild(r2);
    temp.appendChild(l2);
    temp.appendChild(document.createElement("br"));
    temp.appendChild(r3);
    temp.appendChild(l3);
    temp.appendChild(document.createElement("br"));
    temp.appendChild(r4);
    temp.appendChild(l4);
    temp.appendChild(g);
    temp.appendChild(document.createElement("br"));
    temp.appendChild(bt);
    temp.appendChild(btn);
    play(0);
}

function play(i) {
    var b1 = document.getElementById("submit");
    // b1.disabled = false;
    var b2 = document.getElementById("next");
    // b2.disabled =  true;
    var dis = document.getElementById("Result");
    dis.innerHTML = "";
    dis.style.color = "white";
    dis.style.backgroundColor = "white";
    document.getElementById("op1").checked = false;
    document.getElementById("op2").checked = false;
    document.getElementById("op3").checked = false;
    document.getElementById("op4").checked = false;
    var l1 = document.getElementById("ques");
    var l2 = document.getElementById("op-1");
    var l3 = document.getElementById("op-2");
    var l4 = document.getElementById("op-3");
    var l5 = document.getElementById("op-4");
        try {
        l1.innerHTML = questions[i].ques;
        l2.innerHTML = questions[i].opt1;
        l3.innerHTML = questions[i].opt2;
        l4.innerHTML = questions[i].opt3;
        l5.innerHTML = questions[i].opt4;
        } catch(err) {
            finishTest();
        }
        finally {
            b1.onclick = function() {
            if(op1.checked && l2.innerHTML == questions[i].ans) {
                dis.innerHTML = "Correct";
                dis.style.color = "green";
                dis.style.backgroundColor = "LightGreen"
                score += 10;
            }
            else if(op2.checked && l3.innerHTML == questions[i].ans) {
                dis.innerHTML = "Correct";
                dis.style.color = "green";
                dis.style.backgroundColor = "LightGreen"
                score += 10;
            }
            else if(op3.checked && l4.innerHTML == questions[i].ans) {
                dis.innerHTML = "Correct";
                dis.style.color = "green";
                dis.style.backgroundColor = "LightGreen"
                score += 10;
            }
            else if(op4.checked && l5.innerHTML == questions[i].ans) {
                dis.innerHTML = "Correct";
                dis.style.color = "green";
                dis.style.backgroundColor = "LightGreen"
                score += 10;
            }
            // else if(!(op1.checked && op2.checked && op3.checked && op4.checked)) {
            //     alert("Please select an option !");             
            // }
            else {
                dis.innerHTML = "Incorrect";
                dis.style.backgroundColor = "LightPink"
                dis.style.color = "red";
            }
            b1.disabled = true;
            b2.disabled = false;
        }
        b2.onclick =  function() {
            b1.disabled = false;
            play(i+1);
        }
        }
}

function finishTest() {
 var f = document.getElementById("my-div");
 document.body.removeChild(f); 

var a = document.getElementsByTagName("h2");
a[0].innerHTML = "Score: "+score;
var b = document.createElement("h3");
var c = document.createTextNode("Answer Key");
b.appendChild(c);
var l = document.createElement("ul");
l.setAttribute("id","list");
l.setAttribute("type","disk");
document.body.appendChild(b);
document.body.appendChild(l);
var res = document.getElementById("list");
questions.forEach(function(x) {
    var li = document.createElement("li");
    var q = document.createTextNode(x.ques+" - "+x.ans);
    li.appendChild(q);
    res.appendChild(li);
    res.appendChild(document.createElement("br"));
});
   
   var restart = document.createElement("button");
   restart.setAttribute("id","restart");
   var z = document.createTextNode("Restart");
   restart.appendChild(z);
   document.body.appendChild(restart);

   var butt = document.getElementById("restart");
   butt.onclick = function() {
       var head = document.getElementsByTagName("h3");
       document.body.removeChild(res);
       document.body.removeChild(butt);
       document.body.removeChild(head[0]);
       document.getElementsByTagName("h2")[0].innerHTML = "Quiz";
       var di = document.createElement("div");
       di.setAttribute("id","my-div");
       document.body.appendChild(di);
       startGame();
   }
}