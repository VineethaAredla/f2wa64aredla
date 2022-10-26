var express=require('express');
var router = express.Router();

router.get('/',function(req,res,next){
   var number1=Math.random()
   var number2=Math.random()
   var number3=Math.random()
   var hypotfunction=Math.hypot(number1);
   var ceilfunction=Math.ceil(number2);
   var clz32function=Math.clz32(number3);
   res.render('computation',
   {
    title:'Vineetha Aredla computation',
    number1:number1,
    number2:number2,
    number3:number3,
    hypot:hypotfunction,
    ceil:ceilfunction,
    clz32:clz32function,
    });
});

module.exports=router;