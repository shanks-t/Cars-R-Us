import { getWheels, setWheels } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

const wheels = getWheels()
export const Wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = wheels.map(
        (wheel) => {
            return `<li>
                <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel} 
                </li>`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</ul>"
    return html
}

