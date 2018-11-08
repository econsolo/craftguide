import { Directive, ElementRef, Inject, HostListener } from '@angular/core';

@Directive({
  selector: '[cpf]'
})
export class CpfDirective {

  constructor(@Inject(ElementRef) private el: ElementRef) {

  }

  @HostListener('keyup')
  onKeyUp() {
    this.el.nativeElement.value = this.el.nativeElement.value
      .replace(/\D/g, '')
      .replace(/^(\d{3})(\d{3})?(\d{3})?(\d{2})?/, '$1.$2.$3-$4');
  }

  @HostListener('paste', ['$event'])
  blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event'])
  blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event'])
  blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('focus')
  onFocus() {
    this.el.nativeElement.value = this.el.nativeElement.value
      .replace(/\D/g, '')
      .replace(/^(\d{3})(\d{3})?(\d{3})?(\d{2})?/, '$1.$2.$3-$4');
  }
}
