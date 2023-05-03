// Libraries Importation
const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

// Importing notes.js
const getNotes = require("./utils.js")

yargs.version('1.0.1')

// Create yargs command

// ADD Command
yargs.command({
    command : "add",
    describe : "Add a new note",
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Body Object",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        getNotes.addNote(argv.title, argv.body)
    
    }
})

// Remove Command
yargs.command({
    command : "remove",
    describe : "Remove a note",
    builder : {
        title:{
            describe : "Title Object",
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        getNotes.removeNote(argv.title)
    }
})

// List Command
yargs.command({
    command : "list",
    describe : "List a note",
    handler(){
        getNotes.listNotes()
    }
})

//Read Command
yargs.command({
    command : "read",
    describe : "Read a note",
    builder : {
        title :{
            describe : "Title of note",
            demandOption : true,
            type : "string"
        }
    },
    handler(){
        getNotes.readNotes(argv.title)
    }
})

//yargs
yargs.parse()