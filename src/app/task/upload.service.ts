import { Injectable } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // constructor(private storage: AngularFireStorage) {}

  // uploadFile(file: File): Promise<string> {
  //   const randomId = Math.random().toString(36).substring(2);
  //   const filePath = `uploads/${randomId}_${file.name}`;
  //   const storageRef = this.storage.ref(filePath);
  //   const uploadTask = storageRef.put(file);

  //   return new Promise((resolve, reject) => {
  //     uploadTask.snapshotChanges().subscribe(
  //       (snapshot) => {
  //         if (snapshot.state === 'success') {
  //           resolve(filePath);
  //         }
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }
}
