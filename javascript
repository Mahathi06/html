TO ADD TWO NUMBERS IN JAVASCRIPT:
<html>
<head>
<title>exp3</title>
<script>
function add(){
var x,y,sum;
x=Number(document.getElementById("first").value);
y=Number(document.getElementById("second").value);
sum=x+y;
document.getElementById("answer").value=sum;
}
</script>
</head>
<body>
ENTER THE FIRST VALUE: <input type="text" id="first"/>
<br>
ENTER THE SECOND VALUE: <input type="text" id="second"/>
<br>
ANSWER:<input id="answer">
<br>
<button onclick="add()">ANSWER</button>
</body>
</html>
