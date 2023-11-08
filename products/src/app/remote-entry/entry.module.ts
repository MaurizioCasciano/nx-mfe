import {NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {remoteRoutes} from './entry.routes';
import {provideHttpClient} from "@angular/common/http";
import {DetailComponent} from "../components/detail/detail.component";

@NgModule({
  declarations: [RemoteEntryComponent, DetailComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [provideHttpClient(), {provide: APP_BASE_HREF, useValue: "/products"}],
})
export class RemoteEntryModule {
}
