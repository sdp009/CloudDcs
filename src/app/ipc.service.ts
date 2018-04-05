import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable()
export class IpcService {
  private _ipc: IpcRenderer | undefined = void 0;

  constructor() { }

}
