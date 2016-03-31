import {Page, NavController, NavParams} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {Analysis} from '../../components/analysis/analysis';
import {Hypothesis} from '../../components/hypothesis/hypothesis';
import {Status} from '../../components/status/status';

import {Messages} from '../../pages/messages/messages';
import {Backpack} from '../../pages/backpack/backpack';


@Page({
    templateUrl: 'build/pages/notes/notes.html',
    directives: [Status, Analysis, Hypothesis]
})
export class Notes {
    tab: any = 'hypothesis';
    nav: any;
    constructor( @Inject(NavController) nav: NavController) {
        this.nav = nav;
    }
    
    openNotes() {
      this.nav.setRoot(Notes);
    }
    openHelp() {
        
    }
    openBackpack() {
        this.nav.setRoot(Backpack);
    }
    openMessages() {
       this.nav.setRoot(Messages);
    }
}
