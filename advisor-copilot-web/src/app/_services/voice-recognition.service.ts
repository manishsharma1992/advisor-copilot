import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_BASE_URL } from '../../environment';
import { Observable } from 'rxjs';

declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecognition = false;
  public text = '';
  tempWords: any;

  constructor(public http: HttpClient) { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start() {
    this.isStoppedSpeechRecognition = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecognition) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecognition = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }

  get transcribedText() {
    return this.text;
  }

  ask_gpt(request: any): Observable<any> {
    return this.http.post(SERVER_BASE_URL + '/ask_gpt', request, { headers: new HttpHeaders({'Content-Type': 'application/json'}) });
  }
}
