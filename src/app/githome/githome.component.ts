import { Component, OnInit } from '@angular/core';
import {GitserviceService} from '../services/gitservice.service'
import {Github} from '../github';
// import {GitFormComponent} from '../git-form'

@Component({
  selector: 'app-githome',
  templateUrl: './githome.component.html',
  styleUrls: ['./githome.component.css']
})

export class GithomeComponent implements OnInit {
githubs:Github[];

  constructor(public Gitservice: GitserviceService) {
   }


  ngOnInit() {
    this.searchGit("josylad");
  }

  searchGit(searchTerm){
    this.Gitservice.searchGithub(searchTerm).then(
      ()=>{
        this.githubs=this.Gitservice.githubs;
        console.log(this.githubs);

      },
      (error)=>{
        console.log(error)
      }
    )
    // console.log(searchTerm)
  }
}
