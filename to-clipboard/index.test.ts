/**
 * @jest-environment jsdom
 */

import { ToClipboard } from "."

Object.defineProperty(navigator, "clipboard", {
  value: {
    writeText: () => {},
  },
})

describe("ToClipboard", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("return true when copy success", async () => {
    let mockClipboard = ""
    jest
      .spyOn(navigator.clipboard, "writeText")
      .mockImplementation(async (data: string) => {
        mockClipboard = data
      })

    const textArea = document.createElement("textarea")
    textArea.value = "sometext"

    const toClipboard = new ToClipboard(textArea, navigator)
    await expect(toClipboard.copy()).resolves.toBe(true)
    expect(mockClipboard).toBe(textArea.value)
  })

  it("return false when copy fail", async () => {
    let mockClipboard = ""
    const writeTextStub = jest
      .spyOn(navigator.clipboard, "writeText")
      .mockImplementation(async (data: string) => {
        mockClipboard = data
      })

    const textArea = document.createElement("textarea")

    const toClipboard = new ToClipboard(textArea, navigator)
    await expect(toClipboard.copy()).resolves.toBe(false)
    expect(mockClipboard).toBe("")
    expect(writeTextStub).toBeCalledTimes(0)
  })
})
