#!/usr/bin/env node

require('dotenv').config();
const { program } = require('commander');
const inquirer = require('inquirer');
const { googleAuth } = require('./lib/google-auth');
const { initializeDb } = require('./lib/database');
const commands = require('./lib/commands');
const { version } = require('./package.json');

async function main() {
  console.log('🎓 Lesson Plans MCP - Google Drive Database Manager');
  console.log('--------------------------------------------------');
  
  try {
    // Initialize the database
    const db = await initializeDb();
    
    // Authenticate with Google
    const auth = await googleAuth();
    
    // Start the command prompt
    await startPrompt(db, auth);
  } catch (error) {
    console.error('Error initializing MCP:', error.message);
    process.exit(1);
  }
}

async function startPrompt(db, auth) {
  const choices = [
    { name: 'Create a new lesson plan', value: 'create' },
    { name: 'List all lesson plans', value: 'list' },
    { name: 'View a lesson plan', value: 'view' },
    { name: 'Edit a lesson plan', value: 'edit' },
    { name: 'Delete a lesson plan', value: 'delete' },
    { name: 'Search lesson plans', value: 'search' },
    { name: 'Export a lesson plan', value: 'export' },
    { name: 'Help', value: 'help' },
    { name: 'Exit', value: 'exit' }
  ];

  while (true) {
    const { command } = await inquirer.prompt([
      {
        type: 'list',
        name: 'command',
        message: 'What would you like to do?',
        choices
      }
    ]);
    
    if (command === 'exit') {
      console.log('Goodbye! 👋');
      process.exit(0);
    }
    
    try {
      await commands[command](db, auth);
    } catch (error) {
      console.error(`Error executing command ${command}:`, error.message);
    }
  }
}

// Parse command line arguments
program
  .version(version)
  .description('Lesson Plans MCP - Google Drive Database Manager')
  .action(main);

program.parse(process.argv);
