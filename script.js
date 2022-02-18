var classname = document.getElementsByClassName("options");
var submit = document.getElementById("submit");
var ans = document.getElementsByClassName("ans");
var questions = document.getElementsByClassName("questions");
var upperright = document.getElementsByClassName("upper");
const para = document.createElement("p");
var mark = document.getElementById("score");

var score = 0;
a = [];
opt = ["a","b","c","d"];
b = ["a","b","c","a","b","b","d","b","c","b"];
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', function()               //adding event listener to all the option
    {
    	var o = this.getAttribute("class");
    	console.log(o);												//class name of the option which is clicked

    	var element = document.getElementsByClassName(o);
    	console.log(element);


    	var s = o.split(" ");										// s[0]==>qno
    	console.log(s);												// s[1]==>ono
    																// s[last]==>current color



    	a[s[0] - 1] = s[1];
		console.log(a);
    	//store answer in a

    	var w = document.getElementsByClassName(s[0]);  			//get all the options of the question
    	console.log(w);
    	for (var k =0; k<4; k++)
    	{
    		if (w[k] == element[0])
    		{
    			console.log(w[k] + "equal");
    			w[k].classList.add('blue');
    			w[k].classList.remove('white');

    		}
    		else
    		{
    			console.log(w[k] + "not equal");
    			w[k].classList.add('white');
    			w[k].classList.remove('blue');
    		}
    	}
    	
    });
}


submit.addEventListener('click', function(){
	for (var j = 0 ; j<10 ; j++)
	{
		if (a[j]==b[j])
		{
			questions[j].style.backgroundColor = "#70ffc3";
			upperright[j].style.color = "black";
            score+=1
		}
		else
		{
			ans[j].style.backgroundColor = "#70ffc3";
			questions[j].style.backgroundColor = "#ff9770";
		}
	}
    console.log(score);
    const node = document.createTextNode("Your Score : " + score);
    para.appendChild(node);
    mark.appendChild(para);
});
