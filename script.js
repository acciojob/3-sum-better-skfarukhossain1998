function threeSum(arr, target) {
if(arr.length < 3 || target == null) return;

var arsort=arr.sort((a,b)=>a-b);

var n=arr.length;
	var ans=arr[0]+arr[1]+arr[2];
	for (var i = 0; i < n-2; i++) {
		var start=i+1;
		var end=n-1;
		while (start<end) {
			const sum=arsort[i]+arsort[start]+arsort[end];
			if (Math.abs(sum - target) < Math.abs(ans - target)) {
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
