export class ToClipboard {
    constructor(private readonly textArea: HTMLTextAreaElement, private readonly navigator: Navigator) {}

    async copy() {
      if (!this.textArea.value) {
        return false
      }
      await this.navigator.clipboard.writeText(this.textArea.value);
      return true
    }
}
