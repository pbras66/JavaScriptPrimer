/* import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaScriptPrimer';
} */

import { Component, OnInit, OnDestroy} from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, OnDestroy {
    showSearchButton: boolean;
    speechData: string;

    constructor(private speechRecognitionService: SpeechRecognitionService) {
        this.showSearchButton = true;
        this.speechData = '';
    }

    ngOnInit() {
        console.log('hello');
    }

    ngOnDestroy() {
        this.speechRecognitionService.DestroySpeechObject();
    }

    activateSpeechSearchMovie(): void {
        this.showSearchButton = false;

        this.speechRecognitionService.record()
            .subscribe(
            // listener
            (value) => {
                this.speechData = value;
                console.log(value);
            },
            // errror
            (err) => {
                console.log(err);
                if (err.error === 'no-speech') {
                    console.log('--restarting service--');
                    this.activateSpeechSearchMovie();
                }
            },
            // completion
            () => {
                this.showSearchButton = true;
                console.log('--complete--');
                this.activateSpeechSearchMovie();
            });
    }

}
