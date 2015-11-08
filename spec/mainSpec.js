describe("TweetNLP", function(done) {
    var TweetNLP = require("../tweetnlp");
    var tweetnlp = new TweetNLP();
    it("nameFinder", function(done) {
        var tweet = '#MakeYourTailgate RT @DAbitty: My @MakersMark Bloody Mary in @Waterford Crystal.';
        tweetnlp.runTagger(tweet, function (error, array) {
            expect(array.length).toBeGreaterThan(1);
            done();
        })
    })
})




