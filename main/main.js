module.exports = function main(num) {
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
	
  	line1.push('\n');
  	line2.push('\n');
  	line3.push('\n');

 	var res = line1.join('')+line2.join('')+line3.join('');
    return res;
};