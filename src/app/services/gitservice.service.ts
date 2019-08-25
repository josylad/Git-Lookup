import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Github} from '../github';
import { Gitrepo } from '../gitrepo';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';


@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  githubs:Github[]=[];

  gitrepos:Gitrepo[]=[];

  constructor(private http:HttpClient) {}

    searchGithub(searchTerm: string){
      interface data {
        login:string;
        username:string;
        avatar: string;
        html_url: string;
        name: string;
        url: string;
      }

      // let searchEndpoint= "https://api.github.com/users/+'searchTerm'+?access_token="+environment.APIKEY;
    // searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{

        this.http.get<data>('https://api.github.com/users/'+searchTerm+'?access_token='+environment.APIKEY).toPromise().then(
          (results)=>{
            this.githubs = [];
            this.githubs.push(results);
            console.log(results)
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }

  //GIT REPO SEARCH BEGINS
  searchRepo(searchTerm:string){
      // let searchEndpoint= "https://api.giphy.com/v1/gifs/search?api_key="+environment.GIPHYAPIKEY;
      // searchEndpoint += "&q="+searchTerm;
      let promise =  new Promise((resolve, reject)=>{
          this.http.get('https://api.github.com/users/'+searchTerm+'/repos?access_token='+environment.APIKEY).toPromise().then(
            (results)=>{
              // console.log(results);
              // this.gitrepos=[];
              // for(let i=0; i<results[" "].length; i++){
              //   let url = results[""][i]["name"]["owner"]["id"];
              //   let giph = new Gitrepo(url);
              //   this.gitrepos.push(giph);
              // }
              // console.log(this.gitrepos);
              // resolve()
              this.gitrepos = [];
              this.gitrepos.push(results);
              console.log(results)
              resolve()
            },
            (error)=>{
              console.log(error)
              reject()
            }
          )
      })
      return promise;
    }

}
