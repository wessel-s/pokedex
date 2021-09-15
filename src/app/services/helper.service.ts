import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  getLastPathFromURL(url: string): string {
    return url.split('/').filter(Boolean).slice(-1)[0];
  }
}
