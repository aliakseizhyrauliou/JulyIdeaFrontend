import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {

  idea: IIdea;
  ideaForm: FormGroup;

  constructor(private ideaService: IdeasServiceService,
    private route: Router) {
    this.idea = {} as IIdea;

    this.ideaForm = new FormGroup({
             
      "ideaName": new FormControl([Validators.required]),
      "ideaCategory": new FormControl("", [
                          Validators.required]),
      "ideaDescription": new FormControl([Validators.required]),
      "ideaStack": new FormArray([
        new FormControl()
      ])
  });
   }

  ngOnInit(): void {
    
  }

  getFormsControls() : FormArray{
    return this.ideaForm.controls['ideaStack'] as FormArray;
  }

  createIdea(){
    console.log(this.ideaForm);
  }

}
