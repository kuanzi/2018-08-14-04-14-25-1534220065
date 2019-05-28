// module.exports = function main() {
//     console.log("Debug Info");
//     return 'Hello World!';
// };

module.exports = function main(num) {
    // var line1_component = ["._. ","... ", "._. ", "._. ", "... ", "._. ","._. ", "._. ", "._. ", "._. "];
    // var line2_component = ["|.| ","..| ", "._| ", "._| ", "|_| ", "|_. ","|_. ", "..| ", "|_| ", "|_| "];
    // var line3_component = ["|_| ","..| ", "|_. ", "._| ", "..| ", "._| ","|_| ", "..| ", "|_| ", "..| "];
    var line1_component = ["._.","...", "._.", "._.", "...", "._.","._.", "._.", "._.", "._."];
	var line2_component = ["|.|","..|", "._|", "._|", "|_|", "|_.","|_.", "..|","|_|", "|_|"];
	var line3_component = ["|_|","..|", "|_.", "._|", "..|", "._|","|_|", "..|", "|_|", "..|"];
	var line1=new Array();
	var line2=new Array();
	var line3=new Array();
	 for (var i=0;i<num.length;i++)
	 { 
	     line1.push(line1_component[num[i]]);
	     line2.push(line2_component[num[i]]);
	     line3.push(line3_component[num[i]]);
	     if(i != num.length - 1)
	     {
	     	line1.push(' ');
		 	line2.push(' ');
		 	line3.push(' ');
	     }

	 }
	
 	// line1.ToString().RTrim(' ');
  	line1.push('\n');
  	line2.push('\n');
  	line3.push('\n');

  //  	line1 = line1.join('');
 	// line2 = line2.join('');
 	// line3 = line3.join('');
 	var res = line1.join('')+line2.join('')+line3.join('');
 	// console.log(line1);
 	// console.log(res);
 	// var res=new Array();
 	// res.push(line1,line2,line3);
 	// res.join('');
 	// console.log(res);

    return res;
};