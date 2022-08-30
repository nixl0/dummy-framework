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
 *          isSpecifiedSymbols: bool // also allows cyrillic symbols
 *          ignore: boolean
 *      },
 *
 *      returnedMistakes: 'all' | 'single'
 * } config 
 */

let config = {
    trackedForm: "auth-form",
    trackedElements: [],
    minLength: 6,
    maxLength: 36,
    emailMustContain: {
        trackedElement: "auth-form__email-input",
        minLength: 6,
        maxLength: 36,
        allowCyrillic: true,
        allowDigits: true,
        ignore: false
    },
    passwordMustContain: {
        trackedElement: "auth-form__password-input",
        minLength: 6,
        maxLength: 36,
        isDigits: false,
        isUppercase: false,
        isSpecifiedSymbols: false,
        ignore: false
    },
    "returnedMistakes": "all"
}

export default config