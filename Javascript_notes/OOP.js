
/**
SINGLETON PATTERN


*/

var singletonObj = {
    
    publicInt : 1,
    
    publicString : "String",
    
    
    aFunction : function(){
        return "return from aFunction";
    }
}




console.log("============================================================= = ");
console.log("  singletonObj = ", singletonObj);
console.log("============================================================= = ");






var mySingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }
 
    var privateVariable = "Im also private";
 
    var privateRandomNumber = Math.random();
 
 
    //init() retourne un object  literal
    return {

        // Public methods and variables
        publicMethod: function() {
            console.log("The public can see me!");
        },

        publicProperty: "I am also public",

        getRandomNumber: function() {
            return privateRandomNumber;
        }

    };
 
  };
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();
 
var myBadSingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    var privateRandomNumber = Math.random();
 
    return {
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
 
    // Always create a new Singleton instance
    getInstance: function () {
 
      instance = init();
 
      return instance;
    }
 
  };
 
})();
 
 
// Usage:
 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
console.log( singleA.getRandomNumber() ); 
console.log( singleB.getRandomNumber() ); 
 
var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); // true
 
// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.


var mySingleton = (function(){
    
    //private attribute
    var instance;
    
    
    //Fonction init() retourne un object avec les fonctions
    //representant cet objet singleton
    //Cette fonction init() est privee
    function init(){
        
        var privateAttribute = "privateAttribute";
        var privateRandomNumber = Math.random();
        
        function privateFunction(){
         
            return "this init.privateFunction() ";   
        };
        
        return {
            getRandomNumber : function(){
                return privateRandomNumber;
            },
            
            publicAttribute : "publicAttribute",
            
            publicMethod : function(){
                return "return init.publicMEthod()";
            },
            
            publicMethodAccesPrivateMethod : privateFunction()
        };
        
    };
    
    
    return{
        getInstance : function(){
            if( !instance){
                instance = init();
            }
            
            return instance;
        }
    };
  
})();

var testMySingleton1 = mySingleton.getInstance();
var testMySingleton2 = mySingleton.getInstance();
console.log("my singleton1 randomnumer = "+ testMySingleton1.getRandomNumber());
console.log("my singleton2 randomnumer = "+ testMySingleton2.getRandomNumber());
