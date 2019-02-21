import { NgModule } from '@angular/core';

import { Jhpng1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Jhpng1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Jhpng1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Jhpng1SharedCommonModule {}
