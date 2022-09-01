// некий входной массив проверок, есть заданные типы проверок

// проверка на email
// проверка на пароль она может кастомизируемая
// правила передаются массивом

// пароль не короче N символов, пароль не длиннее M символов, пароль содержит только цифры, ...

// возвращать массив ошибок либо первую из ошибок
// если все можно использовать метод every

export default class Validator {
    constructor(config) {
        this.config = config
        this.fieldPatterns = {
            add(pattern) {
                [].push.call(this, pattern)
            }
        }
        this.mistakes = {
            add(mistake) {
                [].push.call(this, mistake)
            }
        }
        this.trackedFormElement = this.getIdOrClass(config.trackedFormElement)

        if(this.trackedFormElement === null) this.mistakes.add({isFormNotFound: true})
    }

    getIdOrClass(element) {
        let elementId = document.getElementById(element)
        let elementClass = document.querySelector(`.${element}`)
        if(elementId === null && elementClass !== null) {
            return elementClass
        }
        else if(elementClass === null) {
            return elementId
        }
        return null
    }

    localizeMistakes(mistakes) {

    }

    validateForm(trackedForm) {

    }

    fieldsProcessing(element) {
        this.emailPattern = this.generateRegExp(config.emailMustContain)
        
        if(element.match(this.emailPattern) === null) {
            return
        }
    }

    generateRegExp(fieldRules) {
        const specifiedEmailCharacters = "._+-"
        let alphabet = "a-z"
        let alphabetCyrillic = "а-я"
        let specifiedCharacters = ""
        let emailAddExp = ""
        let lengthLimits = ""

        let minLength = fieldRules.minLength ? fieldRules.minLength : ""
        let maxLength = fieldRules.maxLength ? fieldRules.maxLength : ""

        if(minLength || maxLength) lengthLimits = `{${minLength},${maxLength}}`

        alphabet = alphabet.concat(fieldRules.allowUppercase ? alphabet.toUpperCase() : "")

        if(fieldRules.allowCyrillic) {
            alphabet = alphabet.concat(alphabetCyrillic)
            alphabet = alphabet.concat(fieldRules.allowUppercase ? alphabetCyrillic.toUpperCase() : "")
        }

        alphabet = alphabet.concat(fieldRules.allowDigits ? "0-9" : "")

        if(fieldRules.isEmailField) {
            emailAddExp = `+@[${alphabet}.-]+.[${alphabet}]{2,4}`
            specifiedCharacters = specifiedCharacters.concat(specifiedEmailCharacters)
        }
        if(fieldRules.specifiedCharacters.length) {
            specifiedCharacters = specifiedCharacters.concat(
                removeCharacterDuplication(
                    specifiedEmailCharacters, 
                    fieldRules.customSpecifiedCharacters,
                    true
                ) 
            )
        }
        return new RegExp(`(^[${alphabet}${specifiedCharacters}])${emailAddExp}$`)
    }

    removeCharacterDuplication(reservedCharacters, specifiedCharacters, checkBothStrings=false) {
        /**
         * input: 23456, 2789181
         * output: 7891
         */

        let result = [...specifiedCharacters].filter((s, n, a) =>
            !reservedCharacters.includes(s) && (checkBothStrings ? a.indexOf(s) === n : true))

        return result.toString().replace(/\,/g, "")
    }
}