import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    @Input()
    zipcodes: Array<String>;
    @Input()
    currentConditions: Map<string, any>;
    @Output()
    zipRemoved = new EventEmitter<string>();

    constructor(public weatherService: WeatherService){ }

    getConditions(zip: string) {
        return this.currentConditions.get(zip);
    }
}
