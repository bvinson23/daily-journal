export const PostEntry = () => {
    return `
    <form action="">
                <fieldset>
                    <label for="journalDate">Date of entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset>
                    <label for="journalConcept">Concepts covered</label>
                    <input type="text">
                </fieldset>
                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea id="journalEntry" name="journalEntry"></textarea>
                </fieldset>
                <fieldset>
                    <label for="moodDropdown">Mood for the day</label>
                    <select name="moods" id="mood-select">
                        <option value="">--Please choose an option--</option>
                        <option value="happy">Happy</option>
                        <option value="fine">Fine</option>
                        <option value="sad">Sad</option>
                    </select>
                </fieldset>
                <button>Record Journal Entry</button>
            </form>
    `
}