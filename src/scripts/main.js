//------------IMPORTS------------//

import { EntryList } from "./JournalEntryList.js"
import { getEntries, createPost, useEntryCollection, deletePost, getSinglePost } from "./data/Datamanager.js"
import { PostEntry } from "./PostEntry.js"
import { NavBar } from "./NavBar.js"
import { PostEdit } from "./PostEdit.js"

//global variable to put elements on the DOM
const applicationElement = document.querySelector(".dailyjournal");

//------------FUNCTIONS TO START THE SITE------------//

//function to show the navbar
const showNavBar = () => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML = NavBar();
}

//function to show the entry form
const showPostEntry = () => {
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
}

//function to show saved journal entries from newest to oldest
const showEntryList = () => {
    const entryElement = document.querySelector("#entryLog");
    getEntries().then((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries.reverse());
    })
}


//function to start the site
const startDailyJournal = () => {
    showNavBar();
    showEntryList();
    showPostEntry();
}

//function call to start the site
startDailyJournal();

//------------OTHER FUNCTIONS------------//

//function to show filtered posts by mood
// ***no functionality yet***
const showFilteredMoodPosts = (moodValue) => {
    const filteredData = useEntryCollection().filter(singlePost => {
        if (singlePost.mood == moodValue) {
            return singlePost
        }
    })
    const entryElement = document.querySelector("#entryLog");
    entryElement.innerHTML = EntryList(filteredData);
}

//------------EVENT LISTENERS------------//

//event listener to filter by mood
applicationElement.addEventListener("change", event => {
    if (event.target.id === "moodSelector") {
        const moodSelection = (event.target.value)
        showFilteredMoodPosts(moodSelection);
    }
})

//event listener to delete a post when clicking delete
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

//event listener to create a new post
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
            .then(document.querySelector(".newEntry").reset())
    }
})