
   let k = readline();
   let M =+(k.split(" ")[0]);
   let N =+(k.split(" ")[1]);
   let L = (M*N)-((M*N)%2);
   console.log(L/2);