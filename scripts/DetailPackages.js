import { getDetailPackages, addDetailPackage } from "./database.js"
import { getColors, getTechnologies, getInteriors, getWheels, getTypes } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "buildPackageButton") {
            addDetailPackage()
        }
    }
)

const buildPackageListItem = (detailPackage) => {
   const interiors = getInteriors()
   const foundInterior = interiors.find(
    (interior) => {
        return interior.id === detailPackage.interiorId
    }
)

const interiorPackage = foundInterior.interior

   const colors = getColors()
   const foundColor = colors.find(
    (color) => {
        return color.id === detailPackage.colorId

    }
)
const colorPackage = foundColor.color

   const technologies = getTechnologies()
   const foundTechnology = technologies.find(
    (technology) => {
        return technology.id === detailPackage.technologyId
    }
)
const technologyPackage = foundTechnology.technology

   const wheels = getWheels()
   const foundWheels = wheels.find(
    (wheel) => {
        return wheels.id === detailPackage.wheelId
    }
) 
const wheelsPackage = foundWheels.wheel

const types = getTypes()
const foundType = types.find(
 (type) => {
     return type.id === detailPackage.typeId
    }
) 
const type = foundType.type

const totalCost = (foundWheels.price + foundTechnology.price + foundColor.price + foundInterior.price) * foundType.priceMult
console.log("priceMult: ", foundType.priceMult)

const totalCostString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})


    return `<li>
        Detail package order #${detailPackage.id} is ready to go and includes the ${type} with the 
        ${colorPackage} color package, a ${interiorPackage}interior, our ${technologyPackage} tech option and the ${wheelsPackage} wheels. Your total cost is ${totalCostString}
    </li>`
}

export const DetailPackages = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for packages, but not the others?
    */
    const packages = getDetailPackages()

    let html = "<ul>"

    const listItems = packages.map(buildPackageListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

