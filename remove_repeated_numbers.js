// Author: Manel Benlloch - 05/12/2018
// Windows CMD Spanish Configuration, command: chcp 65001
// Elimina del array1 lo que esta presente o repetido en el array 2.
var array1=[1,2,3,4,5,6];
var array2=[2,4,6,78];
for(var i=0;i<array1.length;i++)
{
	for(var j=0;j<array1.length;j++)
	{
		if(array1[i]==array2[j])
		array1.splice(i,1);
	}
}
console.log(array1);
