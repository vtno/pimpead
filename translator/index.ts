import thEnMapper from "./th-en.json";
import enThMapper from "./en-th.json";

const engKeyboardCharCodes = { max: 126, min: 33 };
const thRegEx =
  /[ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ]/g;
const thChar = [
  "ก",
  "ข",
  "ฃ",
  "ค",
  "ฅ",
  "ฆ",
  "ง",
  "จ",
  "ฉ",
  "ช",
  "ซ",
  "ฌ",
  "ญ",
  "ฎ",
  "ฏ",
  "ฐ",
  "ฑ",
  "ฒ",
  "ณ",
  "ด",
  "ต",
  "ถ",
  "ท",
  "ธ",
  "น",
  "บ",
  "ป",
  "ผ",
  "ฝ",
  "พ",
  "ฟ",
  "ภ",
  "ม",
  "ย",
  "ร",
  "ฤ",
  "ล",
  "ฦ",
  "ว",
  "ศ",
  "ษ",
  "ส",
  "ห",
  "ฬ",
  "อ",
  "ฮ",
  "ฯ",
  "ะ",
  "ั",
  "า",
  "ำ",
  "ิ",
  "ี",
  "ึ",
  "ื",
  "ุ",
  "ู",
  "ฺ",
  "฿",
  "เ",
  "แ",
  "โ",
  "ใ",
  "ไ",
  "ๅ",
  "ๆ",
  "็",
  "่",
  "้",
  "๊",
  "๋",
  "์",
  "ํ",
  "๎",
  "๏",
  "๐",
  "๑",
  "๒",
  "๓",
  "๔",
  "๕",
  "๖",
  "๗",
  "๘",
  "๙",
  "๚",
  "๛",
  "_",
];
const numberRegEx = /[0-9]/g;

export function isEng(s: string): boolean {
  return (
    s.charCodeAt(0) >= engKeyboardCharCodes.min &&
    s.charCodeAt(0) <= engKeyboardCharCodes.max
  );
}

export function isTh(s: string): boolean {
  return thChar.includes(s);
}

export function translate(input: string): string {
  const chars = input.split("");
  const toThai = isEng(chars[0]);
  const mapper = toThai ? enThMapper : thEnMapper;

  return chars
    .map((c) => {
      if (c === "") return "";
      if (c === " ") return " ";
      if (c === "\n") return "\n";
      if (numberRegEx.test(c) && !toThai) {
        return c;
      }

      // Th char among Eng chars = inverse mapping
      if (toThai && isTh(c)) {
        return thEnMapper[c];
      }

      // Eng char among Th chars = inverse mapping
      if (!toThai && isEng(c) && !['_', '+'].includes(c)) {
        return enThMapper[c];
      }

      return mapper[c];
    })
    .join("");
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
