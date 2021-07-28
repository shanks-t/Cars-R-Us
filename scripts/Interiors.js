import { getInteriors, setInterior } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

const interiors = getInteriors()

export const Interiors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = interiors.map(
        (interior) => {
            return `<li>
                <input type="radio" name="interior" value="${interior.id}" /> ${interior.interior} 
                </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</ul>"
    return html
}

