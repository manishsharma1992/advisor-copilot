import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare let annyang: any;

@Component({
  selector: 'app-voice-command',
  templateUrl: './voice-command.component.html',
  styleUrls: ['./voice-command.component.scss']
})
export class VoiceCommandComponent implements AfterViewInit {
  listening = false;
  transcribedText = '';
  @ViewChild('transcribedTextArea')
  transcribedTextArea!: ElementRef;

  ngAfterViewInit() {
    if (annyang) {
      // Define voice commands and their associated functions
      annyang.addCommands({
        'start listening': () => this.startListening(),
        'stop listening': () => this.stopListening(),
        'open settings': () => this.openSettings(),
      });

      // Start listening
      annyang.start();
    }
  }

  startListening() {
    this.listening = true;
    this.transcribedText = 'Listening...';
  }

  stopListening() {
    this.listening = false;
    this.transcribedText = '';
  }

  openSettings() {
    // Implement the logic to open settings here
  }
}

