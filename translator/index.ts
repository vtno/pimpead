import thEnMapper from "./th-en.json";
import enThMapper from "./en-th.json";

const engKeyboardCharCodes = { max: 126, min: 33 }
const thRegEx = /[ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ]/g

function isOutOfCharCodeRange(range: { max: number, min: number }): (c: number) => boolean {
  return (c: number) => c < range.min && c > range.max;
}

function isEng(s: string): boolean {
  const outOfRange = s.split('').map(c => c.charCodeAt(0)).filter(isOutOfCharCodeRange(engKeyboardCharCodes))
  if (outOfRange.length > 0) return false
  return true
}

function isTh(s: string): boolean {
  return (thRegEx).test(s)
}

export function translate(input: string): string {
  let mapper: any
  if (isEng(input)) {
    mapper = enThMapper
  }
  
  if (isTh(input)) {
    mapper = thEnMapper
  }

  return input.split("").map(c => {
    if (c === " ") return " "
    if (c === "\n") return "\n"
    return mapper[c]
  }).join("")
}

type TranslateFn = (s: string) => string;
export class Translator {
  constructor(
    private src: HTMLTextAreaElement,
    private out: HTMLTextAreaElement,
    private fn: TranslateFn
  ) {
    this.src = src;
    this.out = out;
    this.fn = fn;
  }

  translate() {
    this.out.value = this.fn(this.src.value);
  }
}
