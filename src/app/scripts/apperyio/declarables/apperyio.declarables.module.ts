import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import ApperyioControlValidationDirective from './apperyio_control_validation_directive';
import ApperyioFormChangeDirective from './apperyio_form_change_directive';
import ApperyioPasswordShowDirective from './apperyio_password_show_directive';
import ApperyioTesterButtons from './apperyio_tester_buttons_component';
import ApperyioFilePicker from './apperyio_file_picker_component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        ApperyioControlValidationDirective,
        ApperyioFormChangeDirective,
        ApperyioPasswordShowDirective,
        ApperyioTesterButtons,
        ApperyioFilePicker,
    ],
    exports: [
        ApperyioControlValidationDirective,
        ApperyioFormChangeDirective,
        ApperyioPasswordShowDirective,
        ApperyioTesterButtons,
        ApperyioFilePicker,
    ]
})
export class ApperyioDeclarablesModule {}
