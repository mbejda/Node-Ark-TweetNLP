var java = require('java');
var async = require('async');
java.classpath.push(__dirname+'/lib/ark.jar');
var Twokenize = java.import('cmu.arktweetnlp.Twokenize');
var Sentence = java.import('cmu.arktweetnlp.impl.Sentence');
var ModelSentence = java.import('cmu.arktweetnlp.impl.ModelSentence');
var FeatureExtractor = java.import('cmu.arktweetnlp.impl.features.FeatureExtractor');
var Model = java.import('cmu.arktweetnlp.impl.Model');
var tweetNLP = function(modal) {
    if(modal == undefined){
        modal = __dirname+'/modal';
    }
    var self = this;
    self.model =  Model.loadModelFromTextSync(modal);
    self.featureExtractor = new FeatureExtractor(self.model, false);
};

tweetNLP.prototype.runTagger = function(tweet,cb) {
    var self = this;
    Twokenize.tokenizeRawTweetText(tweet, function (error, tokens) {
        if(error){
            return cb(error);
        }
        var sentence = new Sentence();
        sentence.tokens = tokens;
        var modelSentence = new ModelSentence(sentence.TSync());
        self.featureExtractor.computeFeaturesSync(sentence, modelSentence);
        self.model.greedyDecodeSync(modelSentence, true);
        var taggedTokens = [];
        for (var i = 0; i < sentence.TSync(); i++) {
            var token = tokens.getSync(i);
            var tag = self.model.labelVocab.nameSync(modelSentence.labels[i]);
            var confidence = modelSentence.confidences[i];
            taggedTokens.push({token: token, tag: tag, confidence: confidence})
        }
        return cb(null,taggedTokens)
    });
};



module.exports=tweetNLP;
