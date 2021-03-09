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
    if(event.target.id("#entry--${entry.id}")){
        console.log("post clicked", event.target.id.split("--"))
        console.log("the id is", event.target.id.split("--")[1])
    }
})