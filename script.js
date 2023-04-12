function threeSum(arr, target) {
arr.sort((a,b)=>a-b);
	let ans=arr[0]+arr[1]+arr[2];
var n=arr.length;
	for (let i = 0; i < n-2; i++) {
		let start=i+1;
		let end=n-1;
		while (start<end) {
			const sum=arr[0]+arr[start]+arr[end];
			if (Math.abs(sum-target)<Math.abs[ans-target]) {
				ans=sum;
			}
			if (sum<target) {
				start++;
				
			}
			else
			{
				end--;
			}
		}
		
	}
	return ans;
}

module.exports = threeSum;
