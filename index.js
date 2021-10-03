const program = require('commander');

program
  .version('1.0.0')
  .description('A simple CLI to generate a random password');

program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .parse();

console.log(program.opts())