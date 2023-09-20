import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-danisma-listesi',
  templateUrl: './danisma-listesi.component.html',
  styleUrls: ['./danisma-listesi.component.scss']
})
export class DanismaListesiComponent {
  selectedValues: string[] = [];
  constructor(private router: Router) {}
  isMenuOpen: boolean = false; 

  products: any[] = [
    {
      Id:1,
      name: 'Adem ÇİÇEK',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:2,
      name: 'Büşra Çakmak',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:3,
      name: 'çağlar mercan',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"

    },
    {
      Id:4,
      name: 'EBRU KAYKAÇ',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"

    },
    {
      Id:5,
      name: 'Emre Uzan',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:6,
      name: '	ERKAN GÜZGÜLÜ',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"

    },
    {
      Id:7,
      name: 'fahriye erova',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"

    },
    {
      Id:8,
      name: '	fazil say',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:9,
      name: '	Feride YILMAZ',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:10,
      name: '	FUAT TIRTAR',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:11,
      name: '	Halim ATAK',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:12,
      name: '	melis beyza',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:13,
      name: '	Merve Merve',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
    {
      Id:14,
      name: 'Ürün 14',
      sirano:"18",
      konu:"asdasd	",
      aciklama:"23asdasda4",
      hizmettipi:"	Yazılı Danışma",
      ilgiliavukat:" Halim ATAK",
      karsitaraf:"BÜŞRA ÇAKMAK"
    },
  

  ];
  gotoPage(route: string){
    var url = "main/"+route;
    console.log(url);
    this.router.navigate(['main/'+route]);
  }
}
