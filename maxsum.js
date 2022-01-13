function maxSubArraySum(a, size)
{
    //var maxint = Math.pow(2, 53);
    var max_so_far = 0;
    var max_ending_here = 0;

    for (var i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;

        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}
console.log(maxSubArraySum([-4, 2, -7, 7, 3, 2, -5, 9], [-4, 2, -7, 7, 3, 2, -5, 9].length));