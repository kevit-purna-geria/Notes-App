const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=> "Your Notes..."

// ADD NOTES
const addNote = (title, body)=>{
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note)=> note.title === title )
    const singleDuplicate = notes.find((note)=>note.title===title)

    if(!singleDuplicate){

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
const saveNotes = (notes)=>{
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
const removeNote = (title)=> {
    const lNotes = loadNotes()
    const dNotes = lNotes.filter((note)=> note.title !==title)

    if(lNotes.length === dNotes.length){
        console.log(chalk.bgRed("No note Removed"))
        
    }else{
        console.log(chalk.bgGreen("Note Removed"))
        saveNotes(dNotes)
    }
}

// List Notes
const listNotes = ()=> {
    const notes = loadNotes()

    debugger
    
    console.log(chalk.magentaBright("Your Notes"))
    
    notes.forEach((note) => {
        console.log(chalk.yellowBright(note.title))
    });
}

// Read Notes
const readNotes=(title)=>{
    const notesR = loadNotes()
    const NoteReq = notesR.find((note)=>note.title===title)
    if(NoteReq){
        console.log(chalk.green("Title : ",NoteReq.title))
        console.log(chalk.blue("Body : ",NoteReq.body))
    }else{
        console.log(chalk.bgRed("Error : No title found!"))
    }
} 
module.exports = {
    getNotes : getNotes,
    addNote: addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}