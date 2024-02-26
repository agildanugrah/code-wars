// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution
function getSize(width, height, depth){
    const surfaceArea = 2 * (depth * width + depth * height + width * height)
    const volume = depth * width * height
    return [surfaceArea, volume]
}
