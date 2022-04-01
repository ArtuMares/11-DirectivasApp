import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condicion:boolean){
    if(condicion){
      this.vc.createEmbeddedView(this.tr);
    }else{
      this.vc.clear();
    }
  }

  constructor(
    private tr:TemplateRef<HTMLElement>,
    private vc:ViewContainerRef
    ) {
    console.log("Custom if");
   }

}
