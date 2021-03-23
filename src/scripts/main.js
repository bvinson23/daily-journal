import { EntryList } from "./JournalEntryList.js"
import { getEntries, createPost, useEntryCollection, deletePost } from "./data/Datamanager.js"
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

applicationElement.addEventListener("change", event => {
    if (event.target.id === "moodSelector") {
        const moodSelection = (event.target.value)
        console.log(`user wants to filter posts by mood: ${moodSelection}`)
        showFilteredEntries(moodSelection);
    }
})

const showFilteredEntries = (mood) => {
    const filteredData = useEntryCollection().filter(singlePost => {
        if (singlePost.mood === mood) {
            return singlePost
        }
    })
    const entryElement = document.querySelector(".journalEntry");
    entryElement.innerHTML = EntryList(filteredData)
}

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
      const postId = event.target.id.split("__")[1];
      deletePost(postId)
        .then(response => {
          showEntryList();
        })
    }
  })

applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__submit") {
        event.preventDefault();
        //collect the input values into an object to post to the DB
        const date = document.querySelector("input[name='journalDate']").value
        const concept = document.querySelector("input[name='concept']").value
        const entry = document.querySelector("textarea[name='journalEntry']").value
        const mood = document.querySelector("select[name='moods']").value
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
        .then(document.getElementsByClassName("newEntry").reset())
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