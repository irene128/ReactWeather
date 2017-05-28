function myAddCallback(a, b, callback){
if(typeof a === 'number' && typeof b === 'number')
  {callback(a+b);}else{callback('Oops!!!');}
}

myAddCallback(3, '9', function (sum, err) {
  if(err){
    console.log('error', err);
  }else{
    console.log('result:', sum);
  }
});

/*
function myAdd (a, b) {
  return new Promise(function (resolve, reject){
  if(typeof a === 'number' && typeof b === 'number')
    {resolve(a+b);}else{
    reject('Both '+ a +' , '+ b + ' type should be numbers');}
  });
}

myAdd(3, '5').then(function(sum){
  console.log('result:', sum); },
  function (err) {
    console.log('Error', err);
});
*/
