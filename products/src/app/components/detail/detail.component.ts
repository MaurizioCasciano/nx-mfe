import { Component, inject} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'nx-mfe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  public baseHref = inject(APP_BASE_HREF)
}
