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
            ${
               for (const entry of entries) {
                (
                    (currentEntry) => {
                        return JournalEntryComponent(currentEntry)
                   
               }


                entries.map(
                    (currentEntry) => {
                        return JournalEntryComponent(currentEntry)
                    }
                ).join("") //tells javascript to return with no content ex. a comma between items in string
            }
    `
}

export default EntryListComponent