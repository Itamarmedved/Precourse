// initializing variables
const endNote = document.getElementById('end-note');
const languages = ["HTML", "CSS", "JavaScript", "C++"];
let endNoteText = "";

// constructing the final string based on the array
for (let i = 0; i < languages.length; i++) {
    if (i == 0) {
        endNoteText = endNoteText.concat("This page was built using: ", languages[i]);
    } else if (i == languages.length - 1) {
        endNoteText = endNoteText.concat(" and ", languages[i]);
    } else {
        endNoteText = endNoteText.concat(", ", languages[i]);
    }
}
endNoteText = endNoteText.concat(".");

// injecting the final string to HTML
endNote.innerText = endNoteText;