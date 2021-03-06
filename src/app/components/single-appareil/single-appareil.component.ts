import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Undefined';
  status: string = 'Unknown';

  constructor(private appareilService: AppareilService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    var appareil = this.appareilService.getAppareilById(+id);
    if (appareil !== undefined) {
      this.name = appareil.name;
      this.status = appareil.status;
    }
  }
}
