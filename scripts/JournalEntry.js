/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <div id="entry--${entry.id}" class="journalEntry">
            <h2>Date: ${entry.date}</h2>
            <h3>Conecept Covered: ${entry.concept}</h3>
            <p>Thoughts: ${entry.entry}</p>
            <p>Today I was feeling ${entry.mood}.</p>
        </div>
    `
}

export default JournalEntryComponent