/**
 * Configuration file for dummy-framework/validation
 * @var {
 *      trackedForm: string (form.id | form.class),
 *      trackedElements: array, // not necessary
 *
 *      minLength: int, // not necessary
 *      maxLength: int, // not necessary
 *
 *      emailMustContain: {
 *          minLength: int,
 *          maxLength: int
 * 
 *          allowCyrillic: boolean,
 *          allowDigits: boolean,
 *          ignore: boolean
 *      },
 *
 *      passwordMustContain: {
 *          minLength: int,
 *          maxLength: int,
 * 
 *          isNumbers: boolean,
 *          isUppercase: boolean,
 *          isSpecifiedCharacters: bool // also allows cyrillic symbols
 *          ignore: boolean
 *      },
 *
 *      returnedMistakes: 'all' | 'single'
 * } config 
 */

let validatorConfig = {
    trackedForm: "auth-form",
    allowUppercase: true,
    allowSpecifiedCharacters: true,
    minLength: 6,
    maxLength: 36,
    trackedElements: {
        "auth-form__email-input": {
            minLength: 6,
            maxLength: 36,
            allowCyrillic: true,
            allowDigits: true,
            isEmailField: true,
            isIgnoredField: false
        },
        "auth-form__password-input": {
            allowCyrillic: true,
            allowDigits: true,
            allowUppercase: false,
            allowSpecifiedCharacters: false,
            isIgnoredField: true,
            requirements: { // how much various characters required for field
                minUppercase: 1, // from any available language 
                minDigits: 1,
                minSpecifiedCharacters: 1
            },
            customSpecifiedCharacters: "+-.{}<>"
        }
    },
    returnedMistakes: "all"
}

export default validatorConfig