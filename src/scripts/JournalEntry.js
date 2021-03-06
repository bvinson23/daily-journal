
// Purpose: To render a single journal entry as an HTML representation of the data

export const JournalEntry = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.concept}</h3>
            <p>${entry.entry}</p>
            <p>${entry.date}</p>
            <p>Mood: ${entry.mood}</p>
            <button id="delete__${entry.id}">Delete</button>
        </section>
    `
}