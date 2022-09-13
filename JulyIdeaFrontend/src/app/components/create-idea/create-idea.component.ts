import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IIdea } from 'src/app/models/Idea';
import { IdeasServiceService } from 'src/app/services/ideas-service.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { IdeaCategory } from 'src/app/models/enums/IdeaType';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {

  category = [{value : IdeaCategory.Development, title: "Development"}, 
    {value: IdeaCategory.Art, title: "Art"},
    {value: IdeaCategory.Finance, title: "Finance"}];

  idea: IIdea;
  ideaForm: FormGroup;
  selectedOption: String = "Select category";  

  constructor(private ideaService: IdeasServiceService,
    private route: Router,
    private fb:FormBuilder) {

    this.idea = {} as IIdea;
    this.ideaForm = new FormGroup({
      name : new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      stack: new FormArray([

      ])
      
    })

   }

  ngOnInit(): void {
    
  }


  getFormsControls() : FormArray{
    return this.ideaForm.controls['stack'] as FormArray;
  } 

  changeCategory(e : MatSelectChange){
    this.selectedOption = e.value;
    let value = this.category
      .find(x => x.title === e.value)?.value;
    this.ideaForm.controls["category"].setValue(value),{
      onlySelf: true
    };
  }

  addStack(){
    (<FormArray>this.ideaForm.controls["stack"]).push(new FormControl(''));
  }
  send(){
    debugger;
    if(!this.ideaForm.valid){
      return;
    }
    this.idea = Object.assign(this.idea, this.ideaForm.value);
    console.log(this.idea);
    this.ideaService.createIdea(this.idea)
      .subscribe(x => x);
  }

}
