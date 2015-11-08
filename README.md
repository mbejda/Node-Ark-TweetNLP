![](https://www.mbejda.com/content/images/2015/11/Noahs-ARK-1.jpg#cover)<br>
Ark TweetNLP is a Part-of-Speech Tagging tool for Tweets.

### Installation :
`TweetNLP` Node module uses `Node-Java` as a dependency. Your  project environment should be properly configured to work with `Node-Java`. Click [here](https://github.com/joeferner/node-java) to learn more about `Node-Java`.
```Javascript
npm install tweetnlp --save
```

### Usage :
 The following is a copy and paste example of how to use the `tweetnlp` module.
```Javascript
 var TweetNLP = require("tweetnlp");
 var tweetnlp = new TweetNLP();
 var tweet = '#MakeYourTailgate RT @DAbitty: My @MakersMark Bloody Mary in @Waterford Crystal.';
 tweetnlp.runTagger(tweet, function(error, array) {a
     console.log(array)
 })
```

### Configurations :
`TweetNLP` Node module uses a trained model by default. You can pass a file path to your own trained model when initializing the module.<br>
Example :
```Javascript
var TweetNLP = require("tweetnlp");
var tweetnlp = new TweetNLP('path/to/trained/model');
```
<hr>
### Resources :
Official TweetNLP Site :<br>
http://www.ark.cs.cmu.edu/TweetNLP<br>
Ark Tweet-NLP for Node Github:<br>
[https://github.com/mbejda/Node-Ark-TweetNLP](https://github.com/mbejda/Node-Ark-TweetNLP)<br>

My Twitter : [@notmilobejda](https://twitter.com/notmilobejda)<br>
My Website : [mbejda.com](mbejda.com)
