/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        id: 0,
        date: "07/24/2025",
        concept: "HTML",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        date: "07/29/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum amet.",
        mood: "Sad"
    },
    {
        date: "08/17/2025",
        concept: "HTML, CSS, & JS",
        entry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum amet.",
        mood: "Happy"
    },
    {
        date: "09/11/2025",
        concept: "JS & JS",
        entry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum amet, eum vitae suscipit assumenda nulla nesciunt doloremque sequi ipsum quo blanditiis culpa, praesentium consequatur. Ex nemo atque libero sint.",
        mood: "Meh"
    },
    {
        date: "10/03/2025",
        concept: "All the stuff",
        entry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum amet, eum vitae suscipit assumenda nulla nesciunt doloremque sequi ipsum quo blanditiis culpa, praesentium consequatur. Ex nemo atque libero sint.",
        mood: "Dead"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}