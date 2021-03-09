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