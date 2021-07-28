const database = {
    detailPackageBuilder: {},
    paintColors: [
        {id: 1, color: "Silver"},
        {id: 2, color: "Midnight Blue"},
        {id: 3, color: "Firebrick Red"},
        {id: 4, color: "Spring Green"}
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric"},
        {id: 2, interior: "Charcoal Fabric"},
        {id: 3, interior: "White Leather"},
        {id: 4, interior: "Black Leather"}
    ],
    technologies: [
        {id: 1, technology: "Basic Package"},
        {id: 2, technology: "Navigation Package"},
        {id: 3, technology: "Visibility Package"},
        {id: 4, technology: "Ultra Package"}
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial"},
        {id: 2, wheel: "17-inch Pair Radial Black"},
        {id: 3, wheel: "18-inch Pair Spoke Silver"},
        {id: 4, wheel: "18-inch Pair Spoke Black"}
    ],
    detailPackages: [
        {id: 1, colorId: 2, interiorId: 4, technologyId: 1, wheelsId: 3}
    ]
}

export const addDetailPackage = () => {
    // Copy the current state of user choices
    const newDetailPackage = {...database.detailPackageBuilder}

    // Add a new primary key to the object
    const lastIndex = database.detailPackages.length - 1
    newDetailPackage.id = database.detailPackages[lastIndex].id + 1

    // Add a timestamp to the order
    newDetailPackage.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.detailPackages.push(newDetailPackage)

    // Reset the temporary state for user choices
    database.detailPackageBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const getColors = () => {
    return database.paintColors.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getDetailPackages = () => {
    return database.detailPackages.map(detailPackage => ({...detailPackage}))
}

export const setColor = (id) => {
    database.detailPackageBuilder.colorId = id
}

export const setInterior = (id) => {
    database.detailPackageBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.detailPackageBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.detailPackageBuilder.wheelsId = id
}
