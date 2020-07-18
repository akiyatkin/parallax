let imgRect = src => {
    return new Promise(resolve => {
        let img = new Image()
        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height
            })
        }
        img.src = src
    })

    
}
export { imgRect }