class Component {
    trackables = []

    track(trackable) {
        this.trackables.push(trackable)
    }

    render(element, value) {
        this.trackables.forEach(trackable => {
            if (trackable.id === element.id) {
                trackable.innerHTML = value
            }
        })
    }
}

export default Component