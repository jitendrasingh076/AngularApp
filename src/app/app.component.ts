import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAzureApp';

 filesPicked(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const path = file.webkitRelativePath.split('/');
        console.log(path);
    // upload file using path
    }
}
}
