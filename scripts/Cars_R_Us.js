import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Colors } from "./PaintColors.js"
import { Wheels } from "./Wheels.js"
import { DetailPackages } from "./DetailPackages.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const Cars_R_Us = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices_colors options">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices_interiors options">
                <h2>Interior Packages</h2>
                ${Interiors()}
            </section>
            <section class="choices_technologies options">
                <h2>Tech Packages</h2>
                ${Technologies()}
            </section>
            <section class="choices_wheels options">
                <h2>Wheel Types</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="buildPackageButton">Build Detail Package</button>
        </article>

        <article class="customOrders">
            <h2>Custom Cars</h2>
            ${DetailPackages()}
        </article>
    `
}

