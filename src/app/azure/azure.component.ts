import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-azure',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './azure.component.html',
  styleUrl: './azure.component.scss'
})
export class AzureComponent {
  selectedCloud: string = 'aws';  // Default to AWS

  // Method to change the selected cloud
  selectCloud(cloud: string) {
    this.selectedCloud = cloud;
  }
}
