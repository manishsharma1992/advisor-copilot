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
  isLoading: boolean = false;

  gptResponse: any;

  constructor(
    public service : VoiceRecognitionService
  ) {
    this.service.init()
   }
   toggleIcons() {
    this.showHeart = !this.showHeart;
  }
  typewriterText = ''; // Initialize with empty text
  originalText= 'response text should be updated here '; // Your desired text

  ngOnInit(): void { }

  startService(){
    this.service.start()
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.isClicked = !this.isClicked;
  }

  stopService(){
    this.service.stop()
    this.typeWriter(0);
    this.isClicked = !this.isClicked;
    this.isLoading = true;
    this.service.ask_gpt({role: 'user', content: this.service.transcribedText}).subscribe((response) => {
      this.gptResponse = ((response.responseData.choices) as Array<any>).map(ele => ele.message.content)
      this.isLoading = false;
    });
  }
  typeWriter(index: number) {
    if (index < this.originalText.length) {
      this.typewriterText += this.originalText.charAt(index);
      index++;
      setTimeout(() => {
        this.typeWriter(index);
      }, 100); // Adjust the delay (in milliseconds) to control typing speed
    }
  }
}
