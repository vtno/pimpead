export class Toast {
  constructor(private readonly div: HTMLDivElement) {}

  show(text: string) {
    this.div.innerHTML = text;
    this.toggleVisibility();
    setTimeout(() => {
      this.toggleVisibility();
    }, 3000);
  }

  private toggleVisibility() {
    this.div.classList.toggle("visible");
    this.div.classList.toggle("hidden");
  }
}
