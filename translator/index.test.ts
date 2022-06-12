/**
 * @jest-environment jsdom
 */

import { isEng, isTh, translate, Translator } from ".";

describe("Translator#translate", () => {
  it("update target with correct translation", () => {
    const input = document.createElement("textarea");
    input.value = "Hello World";
    const output = document.createElement("textarea");
    const translator = new Translator(input, output, (input: string) =>
      input.replace("World", "โลก")
    );
    translator.translate();
    expect(output.value).toBe("Hello โลก");
  });
});

describe("translate", () => {
  it.each([
    ["l;ylfu", "สวัสดี"],
    ["riry=i", "พรพัชร"],
    ["vht Fsp", "อ้ะ โหย"],
    ["กำำผกนนผำ+", "deezdooze!"],
    ["ดฟแำินนาใแนท", "facebook.com"],
    [
      "gxHom6dvpjk'.shgTvc]h; c,h;jkgTvw,jg8p",
      "เป็นทุกอย่างให้เธอแล้ว แม้ว่าเธอไม่เคย",
    ],
    [
      "g[njv]6'-hk'[hko0y' vp^j,k ค xuc]h;",
      "เบื่อลุงข้างบ้านจัง อยู่มา 8 ปีแล้ว",
    ],
    ["สนอำ ันี _จจจ", "love you 3000"],
    ["หำฟพแ้ ันีะีิำ ดนพ Fmouj", "search youtube for โทนี่"]
  ])("returns correct translation: %s - %s", (input, output) => {
    expect(translate(input)).toBe(output);
  });
});

describe("isEng", () => {
  it.each([
    ["ำ", false],
    ["ุ", false],
    ["e", true],
    ["3", true],
    ["ว", false],
    ["า", false],
  ])("correctly detect English char: %s - %s ", (input, output) => {
    expect(isEng(input)).toBe(output);
  });
});

describe("isTh", () => {
  it.each([
    ["ส", true],
    ["ว", true],
    ["า", true],
    ["e", false],
    ["ำ", true],
    ["ด", true],
    ["ุ", true],
  ])("correctly detect Thai char: %s - %s ", (input, output) => {
    expect(isTh(input)).toBe(output);
  });
});
