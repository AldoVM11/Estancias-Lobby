import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './Home/Home.module#HomePageModule',
    },
    {
        path: 'tabs',
        loadChildren: './Tabs/Tabs.module#TabsPageModule',
    },
    {
        path: 'profile',
        loadChildren: './Profile/Profile.module#ProfilePageModule',
    },
    {
        path: 'messages',
        loadChildren: './Messages/Messages.module#MessagesPageModule',
    },
    {
        path: 'chat',
        loadChildren: './Chat/Chat.module#ChatPageModule',
    },
    {
        path: 'map',
        loadChildren: './Map/Map.module#MapPageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}