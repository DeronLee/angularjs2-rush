/**
 * Created by deronlee on 5/14/16.
 */

import {Component} from '@angular/core';
import {PlayComponent} from './play.component';


import {TimerService} from './services';
@Component({
    selector:'app',
    directives:[PlayComponent],
    providers:[],
    template:`
    <play></play>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="row">
                    <div class="col-md-8">
                        <header></header>

                    </div>
                </div>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <div class="row">
                    <div class="col-md-8">
                        <!-- question,answer,progress-bar code here -->
                    </div>
                    <div class="col-md-4">
                        <!-- question list-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    `


})

export class AppComponent {

}
