const btn = document.querySelector('.button2')
btn.addEventListener('click', colourChange)
btn.addEventListener('click', changeText)

const cancel = document.querySelector('.button4')
cancel.addEventListener('click', hide)

const newNote = document.querySelector('.button1')
newNote.addEventListener('click', appear)
newNote.addEventListener('click', clear)

const notesList = [
  {0:"note one", 1:"some text 1"}, 
  {0:"note two", 1:"some text 2"}
]

const save = document.querySelector('.button3')
save.addEventListener('click', saveNote)

let noteNum = 2
const addNew = document.querySelector('.button3')
let sidebarFunc = addNotetoSidebar.bind(notesList)
addNew.addEventListener('click', sidebarFunc)


function colourChange() {
    document.querySelector('textarea#note').classList.toggle("dark");
    document.querySelector('.menu').classList.toggle("dark");
    document.querySelector('.button1').classList.toggle("darkbtn");
    document.querySelector('.button3').classList.toggle("darkbtn");
    document.querySelector('.button4').classList.toggle("darkbtn");
  }

function changeText() {
    let x = document.querySelector('.button2');
        if (x.innerHTML === "Dark Theme") {
          x.innerHTML = "Light Theme";
        } else {
          x.innerHTML = "Dark Theme";
        }
}

function hide() {
    let x = document.querySelector('label');
    let y = document.querySelector('.button2')
      x.style.display = "none";
      y.style.display = "none";
  }

function appear() {
    let x = document.querySelector('label');
    let y = document.querySelector('.button2')
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
      }
}

function clear () {
    let x = document.querySelector('#note')
    x.value = ""
    x.setAttribute("placeholder", "This is a placeholder")
}

function saveNote (arr) {
  const newNote = document.querySelector('#note').value
  const newNoteArr = newNote.replace(/\n/, '|||').split('|||')
  notesList.push({...newNoteArr})
}

function addNotetoSidebar (notesList) {
  let title = this[noteNum][0]
  noteNum ++
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(title))
  document.querySelector('ul').appendChild(li)
}

const sidebarNote = document.querySelector("ul")
sidebarNote.addEventListener('click', (e) => {
  const note = notesList.find(n => n[0] == e.target.innerText)
  let x = document.querySelector('#note')
  new_note = note[1]
  x.setAttribute("placeholder", new_note)
})