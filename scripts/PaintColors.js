import { getColors, setColor } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

const colors = getColors()
export const Colors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = colors.map(
        (color) => {
            return `<li>
                <input type="radio" name="color" value="${color.id}" /> ${color.color} 
                </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</ul>"
    return html
}

