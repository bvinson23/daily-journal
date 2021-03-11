import { EntryList } from "./JournalEntryList.js"
import { getEntries, createPost, useEntryCollection } from "./data/Datamanager.js"
import { PostEntry } from "./PostEntry.js"
import { NavBar } from "./NavBar.js"

const showEntryList = () => {
    const entryElement = document.querySelector("#entryLog");
    getEntries().then((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries.reverse());
    })
}


const applicationElement = document.querySelector(".dailyjournal");

applicationElement.addEventListener("click", event => {
    if (event.target.id.startsWith("entry")) {
        console.log("post clicked", event.target.id.split("--"))
        console.log("the id is", event.target.id.split("--")[1])
    }
})

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        //collect the input values into an object to post to the DB
        const date = document.querySelector("input[name='journalDate']").value
        const concept = document.querySelector("input[name='concept']").value
        const entry = document.querySelector("textarea[name='journalEntry']").value
        const mood = document.querySelector("select[name='moods']").value
        //we have not created a user yet - for now, we will hard code `1`.
        //we can add the current time as well
        const postObject = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }

        // be sure to import from the DataManager
        createPost(postObject)
        .then(response => {
            showEntryList();
        })
        .then(document.getElementById("newEntry").reset())
    }
})

const showPostEntry = () => {
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
}

const showNavBar = () => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML = NavBar();
}

const startDailyJournal = () => {
    showNavBar();
    showEntryList();
    showPostEntry();

}

startDailyJournal();