/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    entryLog.innerHTML += `
    <section>
        ${
            entries.map((entry) => {
                return JournalEntryComponent(entry)
            }
        ).join("<hr/>")
        }
    </section>
    `
}

export default EntryListComponent