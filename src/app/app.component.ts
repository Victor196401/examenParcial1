import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogServicesService } from './services/log-services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'examenParcial1';

  constructor(private log: LogServicesService){

  }

  ngOnInit(): void {
    this.log.logHolaMundo();
  }

}
