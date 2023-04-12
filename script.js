function threeSum(arr, target) {
var n=arr.indexOf(target);
	var sum=0;
for(let i=0;i<n;i++){
	sum+=arr[i];
}
	console.log(sum);
}

module.exports = threeSum;
