import { ToClipboard } from "./to-clipboard"
import { Toast } from "./toast"
import { translate, Translator } from "./translator"

function init() {
  const srcTextArea = document.querySelector('#src') as HTMLTextAreaElement
  const outTextArea = document.querySelector('#out') as HTMLTextAreaElement
  const toastDiv = document.querySelector('#toast') as HTMLDivElement
  const translator = new Translator(srcTextArea, outTextArea, translate)
  const copier = new ToClipboard(outTextArea, navigator)
  const toast = new Toast(toastDiv)

  document.querySelector('#translate').addEventListener('click', () => {
    translator.translate()
  })

  document.querySelector('#copy').addEventListener('click', async () => {
    const copied = await copier.copy()
    if (copied) {
      toast.show('ก๊อบละ!')
    }
  })
}

init()
