import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { IdeaCategory } from 'src/app/models/enums/IdeaType';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {

  category = [{value : IdeaCategory.Development, title: "Development"}, {value: IdeaCategory.Art, title: "Art"}];
  idea: IIdea;
  ideaForm: FormGroup;

  constructor(private ideaService: IdeasServiceService,
    private route: Router,
    private fb:FormBuilder) {

    this.idea = {} as IIdea;
    this.ideaForm = new FormGroup({
      name : new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      categoryString: new FormControl(''),
      stack: new FormArray([

      ])
      
    })

   }

  ngOnInit(): void {
    
  }


  getFormsControls() : FormArray{
    return this.ideaForm.controls['stack'] as FormArray;
  } 

  changeCategory(e : Event){
    let value = this.category
      .find(x => x.title === (e.target as HTMLInputElement).value)?.value;
    debugger;
    this.ideaForm.controls["category"].setValue(value),{
      onlySelf: true
    };
  }

  addStack(){
    (<FormArray>this.ideaForm.controls["stack"]).push(new FormControl(''));
  }
  send(){
    this.idea = Object.assign(this.idea, this.ideaForm.value);
    this.ideaService.createIdea(this.idea)
    .subscribe(x => x);
  }

}
