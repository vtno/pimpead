/**
 * @jest-environment jsdom
 */

import { translate, Translator } from ".";

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
    ["gxHom6dvpjk'.shgTvc]h; c,h;jkgTvw,jg8p", "เป็นทุกอย่างให้เธอแล้ว แม้ว่าเธอไม่เคย"]
  ])("returns correct translation: %s - %s", (input, output) => {
    expect(translate(input)).toBe(output);
  });
});
