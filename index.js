const program = require('commander');

program
  .version('1.0.0')
  .description('A simple CLI to generate a random password');

program
  .option('-l, --length <number>', 'Length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn --no-numbers', 'remove numbers')
  .option('-ns --no-symbols', 'remove symbols')
  .parse();

console.log(program.opts())