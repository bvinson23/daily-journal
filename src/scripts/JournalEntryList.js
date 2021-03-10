// Purpose:
//     To render as many journal entry components as there are items in the collection exposed by the data module component

import { JournalEntry } from "./JournalEntry.js"

export const EntryList = (allEntries) => {
    // Use the journal entry data from the data module component
    let entryHTML = "";

    for (const entry of allEntries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       entryHTML += JournalEntry(entry)
    }
    return entryHTML;
}