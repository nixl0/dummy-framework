// некий входной массив проверок, есть заданные типы проверок

// проверка на email
// проверка на пароль она может кастомизируемая
// правила передаются массивом

// пароль не короче N символов, пароль не длиннее M символов, пароль содержит только цифры, ...

// возвращать массив ошибок либо первую из ошибок
// если все можно использовать метод every

import config from './config.js'

export default class Validator {
    constructor() {

        this.passwordPattern = ""
        this.emailPattern = ""

        this.mistakes = {
            add(mistake) {
                [].push.call(this, mistake)
            }
        }
        this.trackedFormElement = this.getIdOrClass(config.emailMustContain.trackedFormElement)
        
        this.emailProcessing(config.emailMustContain.trackedElement)
    }

    getIdOrClass(element) {
        let elementId = document.getElementById(element)
        let elementClass = document.querySelector(`.${element}`)
        if(elementId === elementClass === null) {
            this.mistakes.add(isElementNotFound)
            return null
        }
        else if(elementId === null) {
            return elementClass
        }
        return elementId
    }

    localizeMistakes(mistakes) {

    }

    submitForm(trackedForm) {

    }

    emailProcessing(element) {
        if(config.emailMustContain.ignore) return null

        this.emailPattern = this.generateEmailRegexp(config.emailMustContain)
        
        if(element.match(this.emailPattern) === null) {
            return
        }
    }

    generateEmailRegexp(emailMustContain) {
        let alphabet = "A-Za-z"

        let allowCyrillic = emailMustContain.allowCyrillic
        let allowDigits = emailMustContain.allowDigits
        let minLength = emailMustContain.minLength
        let maxLength = emailMustContain.maxLength


        if(allowCyrillic) alphabet = alphabet.concat("А-Яа-я")
        if(allowDigits) alphabet = alphabet.concat("0-9")

        return new RegExp(`(^[${alphabet}._+-]{${minLength},${maxLength}})+@[${alphabet}.-]+.[${alphabet}]{2,4}$`)
    }
    
}