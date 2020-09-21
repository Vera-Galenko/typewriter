const sentence = "hello there from lighthouse labs \n";
let n = 0;
for (const char of sentence) {
    n += 1000;
    setTimeout(() => {
        process.stdout.write(char);
      }, 1000 + n);
  };
  // console.log('\n');


