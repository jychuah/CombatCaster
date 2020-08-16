import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Monster } from 'src/app/types';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-monster',
  templateUrl: './edit-monster.page.html',
  styleUrls: ['./edit-monster.page.scss'],
})
export class EditMonsterPage implements OnInit {
  monster: Monster;
  uid: string;

  constructor(
    private route: ActivatedRoute,
    public data: DataService,
    public router: Router) {
    this.route.params.subscribe(
      params => {
        this.monster = { ...this.data.monsters[params.uid] };
        this.uid = params.uid;
      }
    );
  }

  ngOnInit() {
  }

  newAttack() {
    const newAttack = {
      name: 'New Attack',
      bonus: 0,
      medianDamage: 5,
      dice: '1d6+2'
    }
    if (!this.monster.attacks) {
      this.monster.attacks = [ newAttack ]
      return;
    }
    this.monster.attacks = [
      ...this.monster.attacks,
      newAttack
    ]
  }

  deleteAttack(index: number) {
    this.monster.attacks.splice(index, 1);
  }

  cancel() {
    this.router.navigateByUrl('/tabs/monsters');
  }

  save() {
    this.data.saveMonster(this.uid, this.monster);
    this.cancel();
  }

  uploadChange($event) {
    this.data.upload($event.target.files[0], this.uid);
  }

}
