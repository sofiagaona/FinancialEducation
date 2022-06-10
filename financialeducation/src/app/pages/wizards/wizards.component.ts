/* import { Component, OnInit } from '@angular/core';
import { NgWizardService, STEP_STATE, THEME, NgWizardConfig, StepChangedArgs, StepValidationArgs } from 'ng-wizard';
import { of } from 'rxjs';
import { InfoService } from '../services/info.service';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.css']
})
export class WizardsComponent implements OnInit {

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
 
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.circles,
    toolbarSettings: {
      // toolbarExtraButtons: [
      //   { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
      // ],
    }
  };
   
  constructor(private ngWizardService: NgWizardService, private servicePage:ServicesService) {
  }



 
  
  ngOnInit() {
    
  }
 
  // showPreviousStep(event?: Event) {
  //   this.ngWizardService.previous();
  // }
 
  // showNextStep(event?: Event) {
  //   this.ngWizardService.next();
  // }
  
  
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
 
  stepChanged(args: any) {
    console.log(args.step);
    console.log(this.servicePage.eventWizar)
  }
 
  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
}


 */