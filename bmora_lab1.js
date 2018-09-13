

var n = prompt("How many numbers do you want to sum?");
add(n);

function add(n){

  if (n == "")
      alert("Hey! You didn't enter anything!")
  else{
  	var result = 0;
		var input = n;
		for (var i = 1; i <= input; i++) {
		  result += i;
		}
      alert("The sum of the first "+n+" numbers is "+result)
  }
}
