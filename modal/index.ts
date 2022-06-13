export class Modal {
  constructor(private readonly modalContainer: HTMLDivElement, private readonly modalBg: HTMLDivElement, private readonly body: HTMLBodyElement) {}

  toggle() {
    this.modalContainer.classList.toggle("modal-active");
    this.modalBg.classList.toggle("active");
    this.body.classList.toggle("overflow-hidden")
  }
}
