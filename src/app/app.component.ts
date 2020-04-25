import { Component, OnInit } from '@angular/core';
import {saveas} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'upload_system';
  result:string = '';
  ngOnInit(){

  }
save(event:any):void{
  var selectFile =event.target.files;
 
  for(var i=0 ;i<selectFile.length;i++)
  {
    this.result += 'File Name : ' + selectFile[i].name;
    this.result += '<br> File Size (byte) : ' +selectFile[i].size;
    this.result += '<br> File Type : ' + selectFile[i].type;
    this.result += '<br> File : ' + selectFile[i].text;
    this.result += '<br>------------------------------------------------- </br>';
    
  }
  
  // var FileSaver;
  // var file1 = new File(["input_files"], "selectFile", {type: "text/plain;charset=utf-8"});
  // var file2 = new File(selectFile,file2);
  // FileSaver.saveAs(file1);
  // FileSaver.savaAs(file2);
  // this.result += 'ffsdc' + file2.name;
  

  
}
} 
