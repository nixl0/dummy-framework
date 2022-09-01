import validatorConfig from "./config/validatorConfig.js"
import Validator from "./validator/validator.js"
const validator = new Validator(validatorConfig)

class Component {
    trackables = []

    track(trackable) {
        this.trackables.push(trackable)
    }

    render(element, value) {
        this.trackables.forEach(trackable => {
            if (trackable.id === element.id) {
                trackable.insertAdjacentHTML('beforeend', value)
            }
        })
    }
}

export default Component