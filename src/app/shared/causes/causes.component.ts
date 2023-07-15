import { Component } from '@angular/core';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent {

  causesData = [
    {
      title: 'Medical Rehabilation',

    },
    {
      title: 'Food Relief Operations',
      
    },
    {
      title: 'Empowering Women in Rural',
      
    }
  ]

}
