import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  ShowSuccess(msg: any) {
    this.toastr.success(msg);
  }
  ShowInfo(msg: any) {
    this.toastr.info(msg);
  }
  ShowError(msg: any) {
    this.toastr.error(msg);
  }
  ShowWarn(msg: any) {
    this.toastr.warning(msg);
  }
}
