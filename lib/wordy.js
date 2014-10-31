'use strict';

function WordProblem(question){
  this.question = question;
}

WordProblem.prototype.OPERATORS = {
  plus: '+',
  minus: '-',
  multiplied: '*',
  divided: '/'
};

WordProblem.prototype.OP_REGEX = /plus|minus|multiplied|divided/g;

WordProblem.prototype.doMath = function() {
  var numbers = this.question.match( /\d+|-\d+/g ),
    operators = this.question.match( this.OP_REGEX );
  if ( numbers.length === 2 ) {
      return eval( 
        numbers[0] + ' ' 
        + this.OPERATORS[operators[0]] 
        + ' ' + numbers[1] 
      );
  } else if ( numbers.length === 3 ) {
    return eval( 
      '(' + numbers[0] + ' ' 
      + this.OPERATORS[operators[0]] 
      + ' ' + numbers[1] + ') ' 
      + this.OPERATORS[operators[1]] 
      + ' ' + numbers[2] 
    );
  }
};

WordProblem.prototype.answer = function() {
  if ( this.OP_REGEX.test(this.question) ) {
    return this.doMath();
  } else {
    throw new ArgumentError();
  }
};


// argument error
function ArgumentError() {
  var tmp = Error.apply(this, arguments);
  tmp.name = this.name = 'ArgumentError'

  this.message = tmp.message
  /*this.stack = */Object.defineProperty(this, 'stack', { // getter for more optimizy goodness
    get: function() {
      return tmp.stack
    }
  })

  return this
}

ArgumentError.prototype = new Error();

