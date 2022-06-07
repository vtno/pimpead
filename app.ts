import { translate, Translator } from "./translator"

function init() {
  console.log('init app..')
  const srcTextArea = document.querySelector('#src') as HTMLTextAreaElement
  const outTextArea = document.querySelector('#out') as HTMLTextAreaElement
  const translator = new Translator(srcTextArea, outTextArea, translate)

  document.querySelector('#translate').addEventListener('click', () => {
    translator.translate()
  })
}

init()
