import { Injectable } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private storage: Storage) {}

  getVideoUrl(path: string): Promise<string> {
    const storageRef = ref(this.storage, path);
    return getDownloadURL(storageRef);
  }
}