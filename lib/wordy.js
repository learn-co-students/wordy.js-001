'use strict';

function WordProblem(str){
  this.answer = function(){
    str = str.replace(/What is /g, "")
    str = str.replace(/ by/g, "");
    str = str.replace(/\?/g, "");
    str = str.replace(/plus/g, "+")
    str = str.replace(/minus/g, "-")
    str = str.replace(/divided/g, "/")
    str = str.replace(/multiplied/g, "*")
    var sep = str.split(" ");
    var ans = sep[0]
    var arr = []
    if(str.match(/\d+/g) === null || str.match(/\d+/g).length < 2){
      throw new ArgumentError()
    } else {
      for(var i = 1; i < sep.length + 1; i = i + 2){
        if(i < sep.length){
          ans = eval(ans.toString() + " " + sep[i] + " " + sep[i+1])
        } else {
          return ans
        }
      }
    }

  }

}

function ArgumentError(){
}
