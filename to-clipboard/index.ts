export class ToClipboard {
    constructor(private readonly textArea: HTMLTextAreaElement) {
      this.textArea = textArea;
    }

    async copy() {
      if (!this.textArea.value) {
        return false
      }
      await navigator.clipboard.writeText(this.textArea.value);
      return true
    }
}
