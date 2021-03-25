export const PostEdit = (postObj) => {
    return `
    <form class="newEntry">
                <fieldset>
                    <label for="journalDate">Date of entry</label>
                    <input type="date" name="journalDate" id="journalDate" placeholder="mm-dd-yyyy"
                        value="${postObj.date}>
                </fieldset>
                <fieldset>
                    <label for="journalConcept">Concepts covered</label>
                    <input type="text" name="concept" value="${postObj.concept}">
                </fieldset>
                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea id="journalEntry" name="journalEntry">${postObj.entry}</textarea>
                </fieldset>
                <fieldset>
                    <label for="moodDropdown">Mood for the day</label>
                    <select name="moods" id="mood-select">
                        <option value="">--Please choose an option--</option>
                        <option value="Excited">Excited</option>
                        <option value="Happy">Happy</option>
                        <option value="Fine">Fine</option>
                        <option value="Sad">Sad</option>
                        <option value="Angry">Angry</option>
                    </select>
                </fieldset>

                <input type="hidden" value="${postObj.id}" name="postId">
                <button id="updatePost__${postObj.id}">Update Journal Entry</button>
            </form>
    `
}