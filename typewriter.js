const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
      }, 1000)
    
  };


//   for (const char of sentence) {
//     console.log(char);
//   }