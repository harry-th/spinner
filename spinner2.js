let spinner2 = (speed, numberOfRuns) => {
  let rate = 0;
  let symbols = ['|','/','-','\\','|'];
  for (let j = 0; j < numberOfRuns; j++) {
    rate += speed;
    for (let i = 0; i < symbols.length; i++) {
      setTimeout(() => {
        process.stdout.write(`\r${symbols[i]}   `);
      }, rate);
      rate += speed;
    }
  }
};
spinner2(50,50);