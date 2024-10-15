function findBestAnswer(userQuestion, faqList) {
    var userWords = userQuestion.toLowerCase().split(' ');

    var bestMatch = -1;
    var maxMatches = 0;

    for (var i = 0; i < faqList.length; i++) {
        var faq = faqList[i];
        var questionWords = faq.question.toLowerCase().split(' ');

        var matchCount = 0;

        for (var j = 0; j < userWords.length; j++) {
            if (questionWords.indexOf(userWords[j]) !== -1) {
                matchCount++;
            }
        }

        if (matchCount > maxMatches) {
            maxMatches = matchCount;
            bestMatch = i;
        }
    }

    if (bestMatch !== -1) {
        return faqList[bestMatch].answer;
    } else {
        return "Sorry, I don't understand your question.";
    }
}

var faqList = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

var userQuestion = prompt("Ask me a question:");
var response = findBestAnswer(userQuestion, faqList);

console.log(response);

//TimeComplexity - O(n)
//SpaceComplexity - O(n)
