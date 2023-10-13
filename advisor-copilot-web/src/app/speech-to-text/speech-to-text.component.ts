import { Component } from '@angular/core';
import { VoiceRecognitionService } from '../_services/voice-recognition.service';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent {
  text: string = '';
  showHeart = false;
  reverseIcon: boolean = true;
  currentTimestamp!: number;
  currentTime!: string;
  isClicked: boolean = true;


  constructor(
    public service : VoiceRecognitionService
  ) {
    this.service.init()
   }
   toggleIcons() {
    this.showHeart = !this.showHeart;
  }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.isClicked = !this.isClicked;
  }

  stopService(){
    this.service.stop()
      this.isClicked = !this.isClicked;
  }
}
