import { Directive, OnChanges, Input, ElementRef, Renderer } from '@angular/core';
import { FormatWidth } from '@angular/common/src/i18n/locale_data_api';

@Directive({
    selector: '[appFullScreen]'
})
export class FullscreenDirective implements OnChanges {

    @Input('appFullScreen') isFullScreen: string;
    @Input() width: string;
    @Input() height: string;

    constructor (private el: ElementRef, private renderer: Renderer) { }

    ngOnChanges() {
        this.fullScreen();
    }

    private fullScreen() {
        console.log('fullscreen', this.isFullScreen);
        console.log(this.width, this.height);
        this.isFullScreen ? this.fullScreenOn() : this.fullScreenOff();
    }

    fullScreenOn() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', `${window.innerWidth}px`);
        this.renderer.setElementStyle(this.el.nativeElement, 'height', `${window.innerHeight}px`);
    }

    fullScreenOff() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', `${this.width}`);
        this.renderer.setElementStyle(this.el.nativeElement, 'height', `${this.height}`);
    }

}
