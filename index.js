const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const log = console.log;

program
  .version('1.0.0')
  .description('A simple CLI to generate a random password');

program
  .option('-l, --length <number>', 'Length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn --no-numbers', 'remove numbers')
  .option('-ns --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// save to file
if (save) {
  savePassword(generatedPassword);
}

// copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Copied to clipboard'));