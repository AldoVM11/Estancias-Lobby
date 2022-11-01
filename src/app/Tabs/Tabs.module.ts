import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    Routes
} from '@angular/router';
import {
    IonicModule
} from '@ionic/angular';
import {
    ApperyioTranslateModule
} from '../scripts/apperyio/translate_module';
import {
    ApperyioDeclarablesModule
} from '../scripts/apperyio/declarables/apperyio.declarables.module';
import {
    Tabs
} from './Tabs';
import {
    PipesModule
} from '../scripts/pipes.module';
import {
    DirectivesModule
} from '../scripts/directives.module';
import {
    ComponentsModule
} from '../scripts/components.module';
import {
    CustomComponentsModule
} from '../scripts/custom-components.module';
import {
    CustomModulesModule
} from '../scripts/custom-modules.module';
const routes: Routes = [{
    path: '',
    component: Tabs,
    children: [{
            path: 'Home',
            children: [{
                path: '',
                loadChildren: '../Home/Home.module#HomePageModule'
            }]
        },
        {
            path: 'Chat',
            children: [{
                path: '',
                loadChildren: '../Chat/Chat.module#ChatPageModule'
            }]
        },
        {
            path: 'Map',
            children: [{
                path: '',
                loadChildren: '../Map/Map.module#MapPageModule'
            }]
        },
        {
            path: 'Messages',
            children: [{
                path: '',
                loadChildren: '../Messages/Messages.module#MessagesPageModule'
            }]
        },
        {
            path: 'Profile',
            children: [{
                path: '',
                loadChildren: '../Profile/Profile.module#ProfilePageModule'
            }]
        },
        {
            path: '',
            redirectTo: 'Home',
            pathMatch: 'full'
        }
    ]
}];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PageRoutingModule {}
@NgModule({
    declarations: [
        Tabs
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        ApperyioDeclarablesModule,
        CustomComponentsModule,
        CustomModulesModule, PageRoutingModule,
        ApperyioTranslateModule
    ],
    exports: [
        Tabs
    ]
})
export class TabsPageModule {}