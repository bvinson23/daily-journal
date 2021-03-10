import { EntryList } from "./JournalEntryList.js"
import { getEntries } from "./data/Datamanager.js"

const showEntryList = () => {
    const entryElement = document.querySelector("#entryLog");
    getEntries().then((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries);
    })
}

const startDailyJournal = () => {
    showEntryList();
}

startDailyJournal();

const applicationElement = document.querySelector(".dailyjournal");

applicationElement.addEventListener("click", event => {
    console.log(event)
    event.target.id.startsWith("entry")
    console.log("post clicked", event.target.id.split("--"))
    console.log("the id is", event.target.id.split("--")[1])

})

// applicationElement.addEventListener("click", event => {
//     event.target.id === "dailyjournal"
//     console.log("You clicked!");

// })