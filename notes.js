const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your Notes..."
}
// ADD NOTES
const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title 
    })

    if(duplicateNotes.length===0){

        notes.push({
            title :title,
            body : body
        })
        console.log(chalk.bgCyanBright("New Notes Added"))
        saveNotes(notes)
    }else{
        console.log(chalk.bgMagenta("Note title taken!"))
    }
}

// SAVE NOTES
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

// Remove Note Function
const removeNote = function(title){
    const lNotes = loadNotes()
    const dNotes = lNotes.filter(function(note){
        return note.title !==title
    })

    if(lNotes.length === dNotes.length){
        console.log(chalk.bgRed("No note Removed"))
    
    }else{
        console.log(chalk.bgGreen("Note Removed"))
        saveNotes(dNotes)
    }

}


module.exports = {
    getNotes : getNotes,
    addNote: addNote,
    removeNote : removeNote
}