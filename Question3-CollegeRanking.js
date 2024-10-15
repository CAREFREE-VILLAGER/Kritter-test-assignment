function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {
    var filteredColleges = colleges.filter(function(college) {
        return college.location === preferredLocation && college.fees <= maxFees;
    });

    filteredColleges.forEach(function(college) {
        college.score = (college.ranking * rankingWeight) + (college.fees / maxFees * feesWeight);
    });

    filteredColleges.sort(function(a, b) {
        return a.score - b.score;
    });

    filteredColleges.forEach(function(college) {
        console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score.toFixed(2)}`);
    });
}

var colleges = [
    { name: "College A", location: "New Delhi", fees: 20000, ranking: 1 },
    { name: "College B", location: "Mumbai", fees: 15000, ranking: 2 },
    { name: "College C", location: "Bengaluru", fees: 25000, ranking: 3 },
    { name: "College D", location: "New Delhi", fees: 10000, ranking: 4 }
];

var preferredLocation = prompt("Enter your preferred location:");
var maxFees = Number(prompt("Enter the maximum fees you are willing to pay:"));
var rankingWeight = Number(prompt("Enter the ranking weight:"));
var feesWeight = Number(prompt("Enter the fees weight:"));

rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);

//Time complexity - O(n + m log m)
//Space complexity - O(n)
