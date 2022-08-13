(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // modal/index.ts
  var Modal = class {
    constructor(modalContainer, modalBg, body) {
      this.modalContainer = modalContainer;
      this.modalBg = modalBg;
      this.body = body;
    }
    toggle() {
      this.modalContainer.classList.toggle("modal-active");
      this.modalBg.classList.toggle("active");
      this.body.classList.toggle("overflow-hidden");
    }
  };

  // to-clipboard/index.ts
  var ToClipboard = class {
    constructor(textArea, navigator2) {
      this.textArea = textArea;
      this.navigator = navigator2;
    }
    copy() {
      return __async(this, null, function* () {
        if (!this.textArea.value) {
          return false;
        }
        yield this.navigator.clipboard.writeText(this.textArea.value);
        return true;
      });
    }
  };

  // toast/index.ts
  var Toast = class {
    constructor(div) {
      this.div = div;
    }
    show(text) {
      this.div.innerHTML = text;
      this.toggleVisibility();
      setTimeout(() => {
        this.toggleVisibility();
      }, 3e3);
    }
    toggleVisibility() {
      this.div.classList.toggle("visible");
      this.div.classList.toggle("hidden");
    }
  };

  // translator/th-en.json
  var _ = "!";
  var \u0E45 = "1";
  var _2 = "@";
  var _3 = "2";
  var _4 = "3";
  var _5 = "#";
  var \u0E20 = "4";
  var _6 = "$";
  var \u0E16 = "5";
  var _7 = "%";
  var _8 = "6";
  var _9 = "^";
  var _10 = "7";
  var _11 = "&";
  var \u0E04 = "8";
  var _12 = "*";
  var \u0E15 = "9";
  var _13 = "(";
  var \u0E08 = "0";
  var _14 = ")";
  var \u0E02 = "-";
  var _15 = "_";
  var \u0E0A = "=";
  var _16 = "+";
  var \u0E46 = "q";
  var _17 = "Q";
  var \u0E44 = "w";
  var _18 = "W";
  var \u0E33 = "e";
  var \u0E0E = "E";
  var \u0E1E = "r";
  var \u0E11 = "R";
  var \u0E30 = "t";
  var \u0E18 = "T";
  var _19 = "y";
  var _20 = "Y";
  var _21 = "u";
  var _22 = "U";
  var \u0E23 = "i";
  var \u0E13 = "I";
  var \u0E19 = "o";
  var \u0E2F = "O";
  var \u0E22 = "p";
  var \u0E0D = "P";
  var \u0E1A = "[";
  var \u0E10 = "{";
  var \u0E25 = "]";
  var _23 = "}";
  var \u0E03 = "\\";
  var \u0E05 = "|";
  var \u0E1F = "a";
  var \u0E24 = "A";
  var \u0E2B = "s";
  var \u0E06 = "S";
  var \u0E01 = "d";
  var \u0E0F = "D";
  var \u0E14 = "f";
  var \u0E42 = "F";
  var \u0E40 = "g";
  var \u0E0C = "G";
  var _24 = "h";
  var _25 = "H";
  var _26 = "j";
  var _27 = "J";
  var \u0E32 = "k";
  var \u0E29 = "K";
  var \u0E2A = "l";
  var \u0E28 = "L";
  var \u0E27 = ";";
  var \u0E0B = ":";
  var \u0E07 = "'";
  var _28 = '"';
  var \u0E1C = "z";
  var _29 = "Z";
  var \u0E1B = "x";
  var _30 = "X";
  var \u0E41 = "c";
  var \u0E09 = "C";
  var \u0E2D = "v";
  var \u0E2E = "V";
  var _31 = "b";
  var _32 = "B";
  var _33 = "n";
  var _34 = "N";
  var \u0E17 = "m";
  var _35 = "M";
  var \u0E21 = ",";
  var \u0E12 = "<";
  var \u0E43 = ".";
  var \u0E2C = ">";
  var \u0E1D = "/";
  var \u0E26 = "?";
  var th_en_default = {
    "+": _,
    \u0E45,
    "\u0E51": _2,
    "/": _3,
    _: _4,
    "\u0E52": _5,
    \u0E20,
    "\u0E53": _6,
    \u0E16,
    "\u0E54": _7,
    "\u0E38": _8,
    "\u0E39": _9,
    "\u0E36": _10,
    "\u0E3F": _11,
    \u0E04,
    "\u0E55": _12,
    \u0E15,
    "\u0E56": _13,
    \u0E08,
    "\u0E57": _14,
    \u0E02,
    "\u0E58": _15,
    \u0E0A,
    "\u0E59": _16,
    \u0E46,
    "\u0E50": _17,
    \u0E44,
    '"': _18,
    \u0E33,
    \u0E0E,
    \u0E1E,
    \u0E11,
    \u0E30,
    \u0E18,
    "\u0E31": _19,
    "\u0E4D": _20,
    "\u0E35": _21,
    "\u0E4A": _22,
    \u0E23,
    \u0E13,
    \u0E19,
    \u0E2F,
    \u0E22,
    \u0E0D,
    \u0E1A,
    \u0E10,
    \u0E25,
    "|": _23,
    \u0E03,
    \u0E05,
    \u0E1F,
    \u0E24,
    \u0E2B,
    \u0E06,
    \u0E01,
    \u0E0F,
    \u0E14,
    \u0E42,
    \u0E40,
    \u0E0C,
    "\u0E49": _24,
    "\u0E47": _25,
    "\u0E48": _26,
    "\u0E4B": _27,
    \u0E32,
    \u0E29,
    \u0E2A,
    \u0E28,
    \u0E27,
    \u0E0B,
    \u0E07,
    ".": _28,
    \u0E1C,
    "(": _29,
    \u0E1B,
    ")": _30,
    \u0E41,
    \u0E09,
    \u0E2D,
    \u0E2E,
    "\u0E34": _31,
    "\u0E3A": _32,
    "\u0E37": _33,
    "\u0E4C": _34,
    \u0E17,
    "?": _35,
    \u0E21,
    \u0E12,
    \u0E43,
    \u0E2C,
    \u0E1D,
    \u0E26
  };

  // translator/en-th.json
  var _36 = "+";
  var _37 = "\u0E45";
  var _38 = "\u0E51";
  var _39 = "/";
  var _40 = "-";
  var _41 = "\u0E52";
  var _42 = "\u0E20";
  var $ = "\u0E53";
  var _43 = "\u0E16";
  var _44 = "\u0E54";
  var _45 = "\u0E38";
  var _46 = "\u0E39";
  var _47 = "\u0E36";
  var _48 = "\u0E3F";
  var _49 = "\u0E04";
  var _50 = "\u0E55";
  var _51 = "\u0E15";
  var _52 = "\u0E56";
  var _53 = "\u0E08";
  var _54 = "\u0E57";
  var _55 = "\u0E02";
  var _56 = "\u0E58";
  var _57 = "\u0E0A";
  var _58 = "\u0E59";
  var q = "\u0E46";
  var Q = "\u0E50";
  var w = "\u0E44";
  var W = '"';
  var e = "\u0E33";
  var E = "\u0E0E";
  var r = "\u0E1E";
  var R = "\u0E11";
  var t = "\u0E30";
  var T = "\u0E18";
  var y = "\u0E31";
  var Y = "\u0E4D";
  var u = "\u0E35";
  var U = "\u0E4A";
  var i = "\u0E23";
  var I = "\u0E13";
  var o = "\u0E19";
  var O = "\u0E2F";
  var p = "\u0E22";
  var P = "\u0E0D";
  var _59 = "\u0E1A";
  var _60 = "\u0E10";
  var _61 = "\u0E25";
  var _62 = "|";
  var _63 = "\u0E03";
  var _64 = "\u0E05";
  var a = "\u0E1F";
  var A = "\u0E24";
  var s = "\u0E2B";
  var S = "\u0E06";
  var d = "\u0E01";
  var D = "\u0E0F";
  var f = "\u0E14";
  var F = "\u0E42";
  var g = "\u0E40";
  var G = "\u0E0C";
  var h = "\u0E49";
  var H = "\u0E47";
  var j = "\u0E48";
  var J = "\u0E4B";
  var k = "\u0E32";
  var K = "\u0E29";
  var l = "\u0E2A";
  var L = "\u0E28";
  var _65 = "\u0E27";
  var _66 = "\u0E0B";
  var _67 = "\u0E07";
  var _68 = ".";
  var z = "\u0E1C";
  var Z = "(";
  var x = "\u0E1B";
  var X = ")";
  var c = "\u0E41";
  var C = "\u0E09";
  var v = "\u0E2D";
  var V = "\u0E2E";
  var b = "\u0E34";
  var B = "\u0E3A";
  var n = "\u0E37";
  var N = "\u0E4C";
  var m = "\u0E17";
  var M = "?";
  var _69 = "\u0E21";
  var _70 = "\u0E12";
  var _71 = "\u0E43";
  var _72 = "\u0E2C";
  var _73 = "\u0E1D";
  var _74 = "\u0E26";
  var en_th_default = {
    "!": _36,
    "1": _37,
    "@": _38,
    "2": _39,
    "3": _40,
    "#": _41,
    "4": _42,
    $,
    "5": _43,
    "%": _44,
    "6": _45,
    "^": _46,
    "7": _47,
    "&": _48,
    "8": _49,
    "*": _50,
    "9": _51,
    "(": _52,
    "0": _53,
    ")": _54,
    "-": _55,
    _: _56,
    "=": _57,
    "+": _58,
    q,
    Q,
    w,
    W,
    e,
    E,
    r,
    R,
    t,
    T,
    y,
    Y,
    u,
    U,
    i,
    I,
    o,
    O,
    p,
    P,
    "[": _59,
    "{": _60,
    "]": _61,
    "}": _62,
    "\\": _63,
    "|": _64,
    a,
    A,
    s,
    S,
    d,
    D,
    f,
    F,
    g,
    G,
    h,
    H,
    j,
    J,
    k,
    K,
    l,
    L,
    ";": _65,
    ":": _66,
    "'": _67,
    '"': _68,
    z,
    Z,
    x,
    X,
    c,
    C,
    v,
    V,
    b,
    B,
    n,
    N,
    m,
    M,
    ",": _69,
    "<": _70,
    ".": _71,
    ">": _72,
    "/": _73,
    "?": _74
  };

  // translator/index.ts
  var engKeyboardCharCodes = { max: 126, min: 33 };
  var thChar = [
    "\u0E01",
    "\u0E02",
    "\u0E03",
    "\u0E04",
    "\u0E05",
    "\u0E06",
    "\u0E07",
    "\u0E08",
    "\u0E09",
    "\u0E0A",
    "\u0E0B",
    "\u0E0C",
    "\u0E0D",
    "\u0E0E",
    "\u0E0F",
    "\u0E10",
    "\u0E11",
    "\u0E12",
    "\u0E13",
    "\u0E14",
    "\u0E15",
    "\u0E16",
    "\u0E17",
    "\u0E18",
    "\u0E19",
    "\u0E1A",
    "\u0E1B",
    "\u0E1C",
    "\u0E1D",
    "\u0E1E",
    "\u0E1F",
    "\u0E20",
    "\u0E21",
    "\u0E22",
    "\u0E23",
    "\u0E24",
    "\u0E25",
    "\u0E26",
    "\u0E27",
    "\u0E28",
    "\u0E29",
    "\u0E2A",
    "\u0E2B",
    "\u0E2C",
    "\u0E2D",
    "\u0E2E",
    "\u0E2F",
    "\u0E30",
    "\u0E31",
    "\u0E32",
    "\u0E33",
    "\u0E34",
    "\u0E35",
    "\u0E36",
    "\u0E37",
    "\u0E38",
    "\u0E39",
    "\u0E3A",
    "\u0E3F",
    "\u0E40",
    "\u0E41",
    "\u0E42",
    "\u0E43",
    "\u0E44",
    "\u0E45",
    "\u0E46",
    "\u0E47",
    "\u0E48",
    "\u0E49",
    "\u0E4A",
    "\u0E4B",
    "\u0E4C",
    "\u0E4D",
    "\u0E4E",
    "\u0E4F",
    "\u0E50",
    "\u0E51",
    "\u0E52",
    "\u0E53",
    "\u0E54",
    "\u0E55",
    "\u0E56",
    "\u0E57",
    "\u0E58",
    "\u0E59",
    "\u0E5A",
    "\u0E5B",
    "_"
  ];
  var numberRegEx = /[0-9]/g;
  function isEng(s2) {
    return s2.charCodeAt(0) >= engKeyboardCharCodes.min && s2.charCodeAt(0) <= engKeyboardCharCodes.max;
  }
  function isTh(s2) {
    return thChar.includes(s2);
  }
  function translate(input) {
    const chars = input.split("");
    const toThai = isEng(chars[0]);
    const mapper = toThai ? en_th_default : th_en_default;
    return chars.map((c2) => {
      if (c2 === "")
        return "";
      if (c2 === " ")
        return " ";
      if (c2 === "\n")
        return "\n";
      if (numberRegEx.test(c2) && !toThai) {
        return c2;
      }
      if (toThai && isTh(c2)) {
        return th_en_default[c2];
      }
      if (!toThai && isEng(c2) && !["_", "+"].includes(c2)) {
        return en_th_default[c2];
      }
      return mapper[c2];
    }).join("");
  }
  var Translator = class {
    constructor(src, out, fn) {
      this.src = src;
      this.out = out;
      this.fn = fn;
      this.src = src;
      this.out = out;
      this.fn = fn;
    }
    translate() {
      this.out.value = this.fn(this.src.value);
    }
  };

  // app.ts
  function init() {
    const srcTextArea = document.querySelector("#src");
    const outTextArea = document.querySelector("#out");
    const toastDiv = document.querySelector("#toast");
    const modalContainer = document.querySelector("#modal");
    const modalBg = document.querySelector("#modal-bg");
    const translator = new Translator(srcTextArea, outTextArea, translate);
    const copier = new ToClipboard(outTextArea, navigator);
    const toast = new Toast(toastDiv);
    const modal = new Modal(modalContainer, modalBg, document.body);
    document.querySelector("#translate").addEventListener("click", () => {
      translator.translate();
    });
    document.querySelector("#copy").addEventListener("click", () => __async(this, null, function* () {
      const copied = yield copier.copy();
      if (copied) {
        toast.show("\u0E01\u0E4A\u0E2D\u0E1A\u0E25\u0E30!");
      }
    }));
    document.querySelector("#modal-toggler").addEventListener("click", () => {
      modal.toggle();
    });
    document.querySelector(".modal-content").addEventListener("click", () => {
      modal.toggle();
    });
    document.querySelector("#modal-bg").addEventListener("click", () => {
      modal.toggle();
    });
  }
  init();
})();
