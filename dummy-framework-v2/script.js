import Component from './component.js'

// root
const div_root = document.querySelector('#root')

const root = new Component()

root.track(div_root)
root.render(div_root, `
<section id="header"></section>

<h1>demo application</h1>

<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
    <li>five</li>
</ul>
`)

const authForm = new Component()

authForm.track(div_root)
authForm.render(div_root, `
    <div id="auth-form">
        <label>Authorization form</label>
        <p>Email:</p>
        <input class="auth-form__email-input"/>
        <p>Password:</p>
        <input type="password" class="auth-form__password-input"/>
        <input type="submit" class="auth-form__submit-button"/>
    </div>
`)



// header
const section_header = document.querySelector('#header')

const header = new Component()

header.track(section_header)
header.render(section_header, `
<h3>this is header</h3>
`)
