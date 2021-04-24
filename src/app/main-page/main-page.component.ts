import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AddZipcode, RemoveZipcode} from '../actions/zipcode.actions';
import {selectCurrentConditionsList, selectZipcodeList, State} from '../reducers';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    zipcodes: Array<string>;

    currentConditions: Map<string, any>;

    constructor(private store: Store<State>, public weatherService: WeatherService) {
        store.select(selectZipcodeList)
            .subscribe(zips => this.zipcodes = zips);

        store.select(selectCurrentConditionsList)
            .subscribe(conditions => this.currentConditions = conditions);
    }

    addLocation(zipcode : string){
        this.store.dispatch(new AddZipcode(zipcode));
    }

    removeZip(zip: string) {
        this.store.dispatch(new RemoveZipcode(zip));
    }
}
