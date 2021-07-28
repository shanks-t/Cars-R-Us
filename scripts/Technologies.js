import { getTechnologies, setTechnology } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

const technologies = getTechnologies()
export const Technologies = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = technologies.map(
        (technology) => {
            return `<li>
                <input type="radio" name="technology" value="${technology.id}" /> ${technology.technology} 
                </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</ul>"
    return html
}

