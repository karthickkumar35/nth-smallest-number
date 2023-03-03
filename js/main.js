//----------------------n th smallest number--------------

let n = parseInt(prompt("Enter the n th number"));

let a = [-3,-2,-1,0,1,2,3];
for(i=0;i<a.length;i++){
	for(j=i;j<a.length;j++){
		if(a[i]>a[j]){
			b = a[j];
			a[j] = a[i];
			a[i] = b;
		}
	}
}	
let c = a[n-1];
document.write(`${n}th smallest number is ${c}`);