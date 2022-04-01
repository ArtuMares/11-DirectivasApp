import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ErrorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;

  private _color :string="red";
  private _mensaje :string="Este campo es requerido";

  @Input() set color(valor:string){
    this._color= valor;
    this.setColor();
  };

  @Input() set  mensaje(valor:string){
    this._mensaje= valor;
    this.setMessage();
  };

  @Input() set  valido(valor:boolean){
    valor? this.htmlElement.nativeElement.classList.remove("hidden"): this.htmlElement.nativeElement.classList.add("hidden");
  };

  constructor(private el:ElementRef<HTMLElement>) {
    console.log("Directiva de error");
    this.htmlElement= el;
    //this.setMessage();
   }

   ngOnInit(): void {
    // console.log("On init directivas");
    this.setColor();
    this.setMessage();
    this.setStyle();
   }

   setStyle():void{
    this.htmlElement.nativeElement.classList.add("form-text");
   }

   setColor():void{
     this.htmlElement.nativeElement.style.color= this._color;
   }
   setMessage():void{
     this.htmlElement.nativeElement.innerText= this._mensaje;
   }
}
