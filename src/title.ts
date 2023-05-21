const getTitle = (text: string): HTMLHeadingElement => {
    const customTitle: HTMLHeadingElement = document.createElement('h1')
    customTitle.style.color = 'teal'
    customTitle.innerText
    return customTitle
}

export default getTitle