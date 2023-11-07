import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {provideHttpClient} from "@angular/common/http";
import {DetailComponent} from "../components/detail/detail.component";

@NgModule({
  declarations: [RemoteEntryComponent, DetailComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [provideHttpClient()],
})
export class RemoteEntryModule {}
