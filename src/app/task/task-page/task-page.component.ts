import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UploadService } from '../upload.service';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'jquery';
const CHUNK_SIZE = 10 * 1024 * 1024; // 10 MB
@Component({
  selector: 'cf-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})

export class TaskPageComponent {

  imageFlag = false;
  VideoFlag = false;
  imageSize = false;
  videoSize = false;
  file: File | null = null;
  uploadStatus: 'idle' | 'inProgress' | 'invalid' | 'success' | 'error' = 'idle';

  constructor(private firestore: Firestore, public matdialog: MatDialog) { }


  onFileSelected(event: any): void {
    console.log("onFileSelected -->", event.target.files[0])
    console.log("CHUNK_SIZE --->", CHUNK_SIZE)
    this.uploadStatus = 'idle';
    this.imageFlag = false;
    this.VideoFlag = false;
    if (event.target.files[0].type.startsWith('image')) {
      this.videoSize = false;
      this.imageFlag = true;
      this.VideoFlag = false;
      if(event.target.files[0].size <= 10498677){
        this.imageSize = false;
        this.file = event.target.files[0];
      }else{
        this.imageSize = true;
        this.imageFlag = false;
        // uploaded image size is more than 10MB
      }

    

    }else if(event.target.files[0].type.startsWith('video')){
      this.imageSize = false;
      this.imageFlag = false;
      this.VideoFlag = true;
      if(event.target.files[0].size <= 10498677){
        this.file = event.target.files[0];
      }else{
        this.videoSize = true;
        this.VideoFlag = false;
        // uploaded image size is more than 10MB
      }
    }else {
      this.uploadStatus = 'invalid';
    }

  }
  uploadImageFile(): void {
    console.log("UPLOAD IMAGE FILE")
    if (!this.file) return;
    this.uploadStatus = 'inProgress';
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result as ArrayBuffer;
      this.uploadToFirestore(fileData);
    };
    reader.readAsArrayBuffer(this.file);
  }

  private uploadToFirestore(fileData: ArrayBuffer): void {
    const base64Data = btoa(new Uint8Array(fileData).reduce((data, byte) => data + String.fromCharCode(byte), ''));

    // Upload base64-encoded string to Firestore

    const collectionRef = collection(this.firestore, 'Image');
    addDoc(collectionRef, { data: base64Data }).then(() => {
      this.uploadStatus = 'success';
    }).catch(error => {
      console.error('Error uploading file:', error);
      this.uploadStatus = 'error';
    });
  }

  /* 1MB */
  uploadVideoFile(): void {
    console.log("UPLOAD Video FILE")
    if (!this.file) return;
    this.uploadStatus = 'inProgress';
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result as ArrayBuffer;
      this.uploadChunks(fileData);
    };
    reader.readAsArrayBuffer(this.file);
  }

  private uploadChunks(fileData: ArrayBuffer): void {
    // Calculate number of chunks
    const numChunks = Math.ceil(fileData.byteLength / CHUNK_SIZE);

    // Upload each chunk
    for (let i = 0; i < numChunks; i++) {
      const chunkData = fileData.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
      this.uploadChunk(chunkData, i + 1, numChunks);
    }
  }

  private uploadChunk(chunkData: ArrayBuffer, chunkNumber: number, totalChunks: number): void {
    // Convert ArrayBuffer to base64-encoded string
    const base64Data = btoa(new Uint8Array(chunkData).reduce((data, byte) => data + String.fromCharCode(byte), ''));

    // Upload base64-encoded chunk to Firestore
    const collectionRef = collection(this.firestore, 'files');
    addDoc(collectionRef, { chunkNumber, totalChunks, data: base64Data }).then(() => {
      if (chunkNumber === totalChunks) {
        this.uploadStatus = 'success';
      }
    }).catch(error => {
      // console.error('Error uploading chunk:', error);
      this.uploadStatus = 'error';
    });
  }



}
