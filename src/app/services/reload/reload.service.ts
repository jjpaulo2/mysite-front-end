import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  errorCounter = 0;

  constructor() { }

  newError(msg: string, func: () => any): any {
    this.errorCounter++;

    if (this.errorCounter < 5) {
      console.log(msg);
      func();
    }
    else {
      this.unspectedError();
    }
  }

  unspectedError(): any{
    document.querySelector("#error-loading").classList.add("show");
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
