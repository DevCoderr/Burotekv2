import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basvuru-giris',
  templateUrl: './basvuru-giris.component.html',
  styleUrls: ['./basvuru-giris.component.css']
})
export class BasvuruGirisComponent implements OnInit {
    selectedIl: number = 0;
    selectedIlce: string = '';

    IlListesi = [
      {
        IL_ILCE_ID: 1,
        IL_ADI: 'Adana',
        ILCELER: ['Seyhan', 'Çukurova', 'Yüreğir'],
      },
      {
        IL_ILCE_ID: 2,
        IL_ADI: 'Adıyaman',
        ILCELER: ['Merkez', 'Gölbaşı', 'Kahta'],
      },
      {
        IL_ILCE_ID: 3,
        IL_ADI: 'Afyonkarahisar',
        ILCELER: ['Merkez', 'Sandıklı', 'Dinar'],
      },
      { IL_ILCE_ID: 4, IL_ADI: 'Ağrı', ILCELER: ['Merkez', 'Diyadin', 'Patnos'] },
      {
        IL_ILCE_ID: 5,
        IL_ADI: 'Aksaray',
        ILCELER: ['Merkez', 'Ağaçören', 'Eskil'],
      },
      {
        IL_ILCE_ID: 6,
        IL_ADI: 'Amasya',
        ILCELER: ['Merkez', 'Suluova', 'Taşova'],
      },
      {
        IL_ILCE_ID: 7,
        IL_ADI: 'Ankara',
        ILCELER: ['Çankaya', 'Keçiören', 'Yenimahalle'],
      },
      {
        IL_ILCE_ID: 8,
        IL_ADI: 'Antalya',
        ILCELER: ['Muratpaşa', 'Kepez', 'Konyaaltı'],
      },
      { IL_ILCE_ID: 9, IL_ADI: 'Ardahan', ILCELER: ['Merkez', 'Göle', 'Hanak'] },
      { IL_ILCE_ID: 10, IL_ADI: 'Artvin', ILCELER: ['Merkez', 'Hopa', 'Borçka'] },
      { IL_ILCE_ID: 11, IL_ADI: 'Aydın', ILCELER: ['Efeler', 'Nazilli', 'Söke'] },
      {
        IL_ILCE_ID: 12,
        IL_ADI: 'Balıkesir',
        ILCELER: ['Karesi', 'Altıeylül', 'Edremit'],
      },
      { IL_ILCE_ID: 13, IL_ADI: 'Bartın', ILCELER: ['Merkez', 'Amasra', 'Ulus'] },
      {
        IL_ILCE_ID: 14,
        IL_ADI: 'Batman',
        ILCELER: ['Merkez', 'Beşiri', 'Gercüş'],
      },
      {
        IL_ILCE_ID: 15,
        IL_ADI: 'Bayburt',
        ILCELER: ['Merkez', 'Demirözü', 'Aydıntepe'],
      },
      {
        IL_ILCE_ID: 16,
        IL_ADI: 'Bilecik',
        ILCELER: ['Merkez', 'Bozüyük', 'Gölpazarı'],
      },
      { IL_ILCE_ID: 17, IL_ADI: 'Bingöl', ILCELER: ['Merkez', 'Genç', 'Solhan'] },
      {
        IL_ILCE_ID: 18,
        IL_ADI: 'Bitlis',
        ILCELER: ['Merkez', 'Tatvan', 'Ahlat'],
      },
      { IL_ILCE_ID: 19, IL_ADI: 'Bolu', ILCELER: ['Merkez', 'Gerede', 'Mengen'] },
      {
        IL_ILCE_ID: 20,
        IL_ADI: 'Burdur',
        ILCELER: ['Merkez', 'Bucak', 'Gölhisar'],
      },
      {
        IL_ILCE_ID: 21,
        IL_ADI: 'Bursa',
        ILCELER: ['Osmangazi', 'Nilüfer', 'Yıldırım'],
      },
      {
        IL_ILCE_ID: 22,
        IL_ADI: 'Çanakkale',
        ILCELER: ['Merkez', 'Biga', 'Ezine'],
      },
      {
        IL_ILCE_ID: 23,
        IL_ADI: 'Çankırı',
        ILCELER: ['Merkez', 'Orta', 'Kurşunlu'],
      },
      {
        IL_ILCE_ID: 24,
        IL_ADI: 'Çorum',
        ILCELER: ['Merkez', 'Osmancık', 'İskilip'],
      },
      {
        IL_ILCE_ID: 25,
        IL_ADI: 'Denizli',
        ILCELER: ['Pamukkale', 'Merkez', 'Çivril'],
      },
      {
        IL_ILCE_ID: 26,
        IL_ADI: 'Diyarbakır',
        ILCELER: ['Bağlar', 'Kayapınar', 'Sur'],
      },
      {
        IL_ILCE_ID: 27,
        IL_ADI: 'Düzce',
        ILCELER: ['Merkez', 'Akçakoca', 'Yığılca'],
      },
      {
        IL_ILCE_ID: 28,
        IL_ADI: 'Edirne',
        ILCELER: ['Merkez', 'Keşan', 'Uzunköprü'],
      },
      {
        IL_ILCE_ID: 29,
        IL_ADI: 'Elazığ',
        ILCELER: ['Merkez', 'Karakoçan', 'Kovancılar'],
      },
      {
        IL_ILCE_ID: 30,
        IL_ADI: 'Erzincan',
        ILCELER: ['Merkez', 'Kemah', 'Çayırlı'],
      },
      {
        IL_ILCE_ID: 31,
        IL_ADI: 'Erzurum',
        ILCELER: ['Yakutiye', 'Palandöken', 'Aziziye'],
      },
      {
        IL_ILCE_ID: 32,
        IL_ADI: 'Eskişehir',
        ILCELER: ['Tepebaşı', 'Odunpazarı', 'Çankaya'],
      },
      {
        IL_ILCE_ID: 33,
        IL_ADI: 'Gaziantep',
        ILCELER: ['Şahinbey', 'Şehitkamil', 'Oğuzeli'],
      },
      {
        IL_ILCE_ID: 34,
        IL_ADI: 'Giresun',
        ILCELER: ['Merkez', 'Bulancak', 'Espiye'],
      },
      {
        IL_ILCE_ID: 35,
        IL_ADI: 'Gümüşhane',
        ILCELER: ['Merkez', 'Kelkit', 'Köse'],
      },
      {
        IL_ILCE_ID: 36,
        IL_ADI: 'Hakkari',
        ILCELER: ['Merkez', 'Çukurca', 'Şemdinli'],
      },
      {
        IL_ILCE_ID: 37,
        IL_ADI: 'Hatay',
        ILCELER: ['Antakya', 'İskenderun', 'Defne'],
      },
      {
        IL_ILCE_ID: 38,
        IL_ADI: 'Iğdır',
        ILCELER: ['Merkez', 'Tuzluca', 'Aralık'],
      },
      {
        IL_ILCE_ID: 39,
        IL_ADI: 'Isparta',
        ILCELER: ['Merkez', 'Yalvaç', 'Eğirdir'],
      },
      {
        IL_ILCE_ID: 40,
        IL_ADI: 'İstanbul',
        ILCELER: ['Fatih', 'Kadıköy', 'Beşiktaş'],
      },
      {
        IL_ILCE_ID: 41,
        IL_ADI: 'İzmir',
        ILCELER: ['Bornova', 'Karşıyaka', 'Konak'],
      },
      {
        IL_ILCE_ID: 42,
        IL_ADI: 'Kahramanmaraş',
        ILCELER: ['Dulkadiroğlu', 'Onikişubat', 'Elbistan'],
      },
      {
        IL_ILCE_ID: 43,
        IL_ADI: 'Karabük',
        ILCELER: ['Merkez', 'Safranbolu', 'Eflani'],
      },
      {
        IL_ILCE_ID: 44,
        IL_ADI: 'Karaman',
        ILCELER: ['Merkez', 'Ermenek', 'Ayrancı'],
      },
      {
        IL_ILCE_ID: 45,
        IL_ADI: 'Kars',
        ILCELER: ['Merkez', 'Kağızman', 'Sarıkamış'],
      },
      {
        IL_ILCE_ID: 46,
        IL_ADI: 'Kastamonu',
        ILCELER: ['Merkez', 'Taşköprü', 'Küre'],
      },
      {
        IL_ILCE_ID: 47,
        IL_ADI: 'Kayseri',
        ILCELER: ['Kocasinan', 'Melikgazi', 'Talas'],
      },
      {
        IL_ILCE_ID: 48,
        IL_ADI: 'Kırıkkale',
        ILCELER: ['Merkez', 'Delice', 'Karakeçili'],
      },
      {
        IL_ILCE_ID: 49,
        IL_ADI: 'Kırklareli',
        ILCELER: ['Merkez', 'Lüleburgaz', 'Babaeski'],
      },
      {
        IL_ILCE_ID: 50,
        IL_ADI: 'Kırşehir',
        ILCELER: ['Merkez', 'Kaman', 'Çiçekdağ'],
      },
      {
        IL_ILCE_ID: 51,
        IL_ADI: 'Kilis',
        ILCELER: ['Merkez', 'Elbeyli', 'Musabeyli'],
      },
      {
        IL_ILCE_ID: 51,
        IL_ADI: 'Kilis',
        ILCELER: ['Merkez', 'Elbeyli', 'Musabeyli'],
      },
      {
        IL_ILCE_ID: 52,
        IL_ADI: 'Kocaeli',
        ILCELER: ['İzmit', 'Gebze', 'Darıca'],
      },
      {
        IL_ILCE_ID: 53,
        IL_ADI: 'Konya',
        ILCELER: ['Selçuklu', 'Meram', 'Karatay'],
      },
      {
        IL_ILCE_ID: 54,
        IL_ADI: 'Kütahya',
        ILCELER: ['Merkez', 'Tavşanlı', 'Simav'],
      },
      {
        IL_ILCE_ID: 55,
        IL_ADI: 'Malatya',
        ILCELER: ['Yeşilyurt', 'Battalgazi', 'Doğanşehir'],
      },
      {
        IL_ILCE_ID: 56,
        IL_ADI: 'Manisa',
        ILCELER: ['Şehzadeler', 'Akhisar', 'Salihli'],
      },
      {
        IL_ILCE_ID: 57,
        IL_ADI: 'Mardin',
        ILCELER: ['Artuklu', 'Kızıltepe', 'Derik'],
      },
      {
        IL_ILCE_ID: 58,
        IL_ADI: 'Mersin',
        ILCELER: ['Akdeniz', 'Yenişehir', 'Toroslar'],
      },
      {
        IL_ILCE_ID: 59,
        IL_ADI: 'Muğla',
        ILCELER: ['Menteşe', 'Bodrum', 'Fethiye'],
      },
      {
        IL_ILCE_ID: 60,
        IL_ADI: 'Muş',
        ILCELER: ['Merkez', 'Malazgirt', 'Bulanık'],
      },
      {
        IL_ILCE_ID: 61,
        IL_ADI: 'Nevşehir',
        ILCELER: ['Merkez', 'Ürgüp', 'Avanos'],
      },
      { IL_ILCE_ID: 62, IL_ADI: 'Niğde', ILCELER: ['Merkez', 'Bor', 'Ulukışla'] },
      { IL_ILCE_ID: 63, IL_ADI: 'Ordu', ILCELER: ['Altınordu', 'Ünye', 'Fatsa'] },
      {
        IL_ILCE_ID: 64,
        IL_ADI: 'Osmaniye',
        ILCELER: ['Merkez', 'Kadirli', 'Düziçi'],
      },
      { IL_ILCE_ID: 65, IL_ADI: 'Rize', ILCELER: ['Merkez', 'Çayeli', 'Pazar'] },
      {
        IL_ILCE_ID: 66,
        IL_ADI: 'Sakarya',
        ILCELER: ['Serdivan', 'Adapazarı', 'Erenler'],
      },
      {
        IL_ILCE_ID: 67,
        IL_ADI: 'Samsun',
        ILCELER: ['İlkadım', 'Atakum', 'Canik'],
      },
      {
        IL_ILCE_ID: 68,
        IL_ADI: 'Siirt',
        ILCELER: ['Merkez', 'Pervari', 'Kurtalan'],
      },
      {
        IL_ILCE_ID: 69,
        IL_ADI: 'Sinop',
        ILCELER: ['Merkez', 'Gerze', 'Durağan'],
      },
      {
        IL_ILCE_ID: 70,
        IL_ADI: 'Sivas',
        ILCELER: ['Merkez', 'Şarkışla', 'Zara'],
      },
      {
        IL_ILCE_ID: 71,
        IL_ADI: 'Şanlıurfa',
        ILCELER: ['Haliliye', 'Eyyübiye', 'Karaköprü'],
      },
      {
        IL_ILCE_ID: 72,
        IL_ADI: 'Şırnak',
        ILCELER: ['Merkez', 'Cizre', 'Silopi'],
      },
      {
        IL_ILCE_ID: 73,
        IL_ADI: 'Tekirdağ',
        ILCELER: ['Çorlu', 'Merkez', 'Çerkezköy'],
      },
      { IL_ILCE_ID: 74, IL_ADI: 'Tokat', ILCELER: ['Merkez', 'Niksar', 'Erbaa'] },
      {
        IL_ILCE_ID: 75,
        IL_ADI: 'Trabzon',
        ILCELER: ['Ortahisar', 'Akçaabat', 'Yomra'],
      },
      {
        IL_ILCE_ID: 76,
        IL_ADI: 'Tunceli',
        ILCELER: ['Merkez', 'Pülümür', 'Nazımiye'],
      },
      { IL_ILCE_ID: 77, IL_ADI: 'Uşak', ILCELER: ['Merkez', 'Banaz', 'Eşme'] },
      { IL_ILCE_ID: 78, IL_ADI: 'Van', ILCELER: ['İpekyolu', 'Erciş', 'Tatvan'] },
      {
        IL_ILCE_ID: 79,
        IL_ADI: 'Yalova',
        ILCELER: ['Merkez', 'Çınarcık', 'Termal'],
      },
      {
        IL_ILCE_ID: 80,
        IL_ADI: 'Yozgat',
        ILCELER: ['Merkez', 'Sorgun', 'Akdağmadeni'],
      },
      {
        IL_ILCE_ID: 81,
        IL_ADI: 'Zonguldak',
        ILCELER: ['Merkez', 'Çaycuma', 'Devrek'],
      },
    ];

    selectedIlId!: number;
    selectedIlceId!: number;
    selectedIlceList: string[] = [];
  router: any;

    constructor() {}
    ngOnInit() {}

    onIlSelectChange(event: any) {
      this.selectedIlId = parseInt(event.target.value);
      this.selectedIlceId = null as any;
      this.selectedIlceList =
        this.IlListesi.find((il) => il.IL_ILCE_ID === this.selectedIlId)
          ?.ILCELER || [];
    }

    getIlceList(selectedIlId: string): string[] {
      const selectedIl = this.IlListesi.find(
        (il) => il.IL_ILCE_ID === parseInt(selectedIlId)
      );
      return selectedIl ? selectedIl.ILCELER : [];
    }
    onIlceSelectChange(event: any) {
      this.selectedIlceId = parseInt(event.target.value);
    }
  }






