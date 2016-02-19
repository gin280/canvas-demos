let circumference = function(radius) {
  return 2 * Math.PI * radius;
}


//闭包
let test = () => {
  for(let i = 1; i<4; i++) {
    !function(i) {
      document.getElementById('div'+i).addEventListener('click', function(){
        console.log(i);
      })
    }(i)
  }
}




export function area(radius) {
  return Math.PI * radius * radius;
}

export {circumference}