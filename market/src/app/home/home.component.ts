import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cone=false
  public ctwo=false
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
        { title: 'Fordítási hiba nincs', text: 'ez megvan', cols: 4, rows: 1},
        { title: 'Futtatási hiba nincs', text: 'yup ez is', cols: 4, rows: 1 },
        { title: 'Firebase Hosting URL', text: 'elvileg megy a database de most nem vagyok biztos hogy ez arra vonatkozik :(', cols: 4, rows: 1 },
        { title: 'Alkalmazás felbontása megfelelő számú komponensre', text: 'pipa de nyugodtan bongeszd vegig ha akarod ;)', cols: 4, rows: 1 },
        { title: 'Adatmodell definiálása (legalább 4 TypeScript interfész vagy class formájában (ugyanennyi kollekció))', text: 'pipa de nyugodtan bongeszd vegig ha akarod ;)', cols: 4, rows: 1 },
        { title: 'Reszponzív, mobile-first felület', text: 'pipa a navmenu mindig alkalmazkodik a kijelzohoz es ez a home felulet is', cols: 4, rows: 1 },
        { title: 'Legalább 2 különböző attribútum direktíva használata', text: 'ngClass a home.component-ben megtalalod a dark modehoz a masik pedig a NgModel a cimformponentben', cols: 4, rows: 1 },
        { title: 'Legalább 2 különböző strukturális direktíva használata', text: 'NgIf a nav componensben valamint a cimform componensben is es ngfor is a cimformban es a home/products componensben ', cols: 4, rows: 1 },
        { title: 'Adatátadás szülő és gyermek komponensek között (legalább 1 @Input és 1 @Output)', 
        text: 'Kicsit lükén de megvan oldva a bejelentkezes ful küld eggyet a navnak hogy be vagyunk leptetve boolal (tudom tudom nem szep de maskep nem tudtam igy hirtelen), kap @output ban a nav pedig egy pontos linket (ezzel rejtem el a kijelentkezés gombot)', 
        cols: 4, rows: 1 },
        { title: 'Legalább 10 különböző Material elem helyes használata.', text: 'ez megvan de ha akarod app.moduleban megszamolhatod', cols: 4, rows: 1 },
        { title: 'Adatbevitel Angular form-ok segítségével megvalósítva (legalább 2)', text: 'regisztracio es bejelentkezes', cols: 4, rows: 1 },
        { title: 'Legalább 1 saját Pipe osztály írása és használata', text: 'a felhasznaloi icon azzal valosul meg de ha a pontos mukodeset szeretned itt egy video is ami alapjan csinaltam: https://codecraft.tv/courses/angular/pipes/custom-pipes/', cols: 4, rows: 1 },
        { title: 'Legalább 2 különböző Lifecycle Hook használata a teljes projektben (értelmes tartalommal, nem üresen)', text: 'ngAfterViewInit a kosárban,+ ngOnDestroy az app komponensben? XD', cols: 4, rows: 1 },
        { title: 'CRUD műveletek mindegyike megvalósult (Promise, Observable használattal)', text: 'nem vagyok benne biztos elvileg csatlakozik a databasehez de nem promis/observe-vel', cols: 4, rows: 1 },
        { title: 'CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek', text: 'ki lettek szervezve de injektalva nem biztos', cols: 4, rows: 1 },
        { title: 'Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen)', text: 'elvileg mukodik lekerdez es irni is tud rá', cols: 4, rows: 1 },
        { title: 'Legalább 2 komplex Firestore lekérdezés megvalósítása (ide tartoznak: where feltétel, rendezés, léptetés, limitálás)', 
        text: 'van egy a bejelentkezésnél ahol fogja és visszaadja a felhasználót amennyiben nem létezik akkor ír hogy hibás a felhasználó de csak ez van rajta (-2p)', cols: 4, rows: 1 },
        { title: 'Legalább 4 különböző route a különböző oldalak eléréséhez', 
        text: 'a navbarban a pagek mind igy mukodnek (kiveve a login de meg ahoz is linkelek)', cols: 4, rows: 1 },
        { title: 'Legalább 2 route levédése azonosítással (AuthGuard) (ahol ennek értelme van, pl.: egy fórum témakör megtekinthető bárki számára, de a regisztrált felhasználó adatai nem)', 
        text: 'mivel a firebase-el nagyon szenvedtem ezt nem birtam megcsinalni -2', cols: 4, rows: 1 },
        { title: 'Szubjektív pontozás a projekt egészére vonatkozólag (mennyire fedi le a projekt a témakört (mennyire kapcsolódik hozzá), mennyi lehet a befektetett energia a projektben)', 
        text: 'hát funkcionálisan megvan az oldal de mivel a firebase szivat ezert a kosarba rakás nem megy, (-1p) regisztrálni tudunk és bejelentkezni is azonban ugye ezt nem validalja kb sehol a rendszer azon felul hogy az email jo-e szoval(-1p) termekek azonban mind adatbazisbol jonnek le es szerintem a kulseje is elfogadhato no? esetleg meg talán kicsit kevés a minta adat szóval legyen -1 point ha szar napond van de plz kegyelmez (idén akarok abszolválni és nem akarok csúszni)',
         cols: 4, rows: 1 },
      ];
      }

      return [
        { title: 'Fordítási hiba nincs', text: 'ez megvan', cols: 1, rows: 1},
        { title: 'Futtatási hiba nincs', text: 'yup ez is', cols: 1, rows: 1 },
        { title: 'Firebase Hosting URL', text: 'elvileg megy a database de most nem vagyok biztos hogy ez arra vonatkozik :(', cols: 1, rows: 1 },
        { title: 'Alkalmazás felbontása megfelelő számú komponensre', text: 'pipa de nyugodtan bongeszd vegig ha akarod ;)', cols: 1, rows: 1 },
        { title: 'Adatmodell definiálása (legalább 4 TypeScript interfész vagy class formájában (ugyanennyi kollekció))', text: 'pipa de nyugodtan bongeszd vegig ha akarod ;)', cols: 1, rows: 1 },
        { title: 'Reszponzív, mobile-first felület', text: 'pipa a navmenu mindig alkalmazkodik a kijelzohoz es ez a home felulet is', cols: 1, rows: 1 },
        { title: 'Legalább 2 különböző attribútum direktíva használata', text: 'ngClass a home.component-ben megtalalod a dark modehoz a masik pedig a NgModel a cimformponentben', cols: 1, rows: 1 },
        { title: 'Legalább 2 különböző strukturális direktíva használata', text: 'NgIf a nav componensben valamint a cimform componensben is es ngfor is a cimformban es a home/products componensben ', cols: 1, rows: 1 },
        { title: 'Adatátadás szülő és gyermek komponensek között (legalább 1 @Input és 1 @Output)', 
        text: 'Kicsit lükén de megvan oldva a bejelentkezes ful küld eggyet a navnak hogy be vagyunk leptetve boolal (tudom tudom nem szep de maskep nem tudtam igy hirtelen), kap @output ban a nav pedig egy pontos linket (ezzel rejtem el a kijelentkezés gombot)',
         cols: 2, rows: 1 },
        { title: 'Legalább 10 különböző Material elem helyes használata.', text: 'ez megvan de ha akarod app.moduleban megszamolhatod', cols: 1, rows: 1 },
        { title: 'Adatbevitel Angular form-ok segítségével megvalósítva (legalább 2)', text: 'regisztracio es bejelentkezes', cols: 1, rows: 2 },
        { title: 'Legalább 1 saját Pipe osztály írása és használata', 
        text: 'a felhasznaloi icon azzal valosul meg de ha a pontos mukodeset szeretned itt egy video is ami alapjan csinaltam: https://codecraft.tv/courses/angular/pipes/custom-pipes/', cols: 2, rows: 1 },
        { title: 'Legalább 2 különböző Lifecycle Hook használata a teljes projektben (értelmes tartalommal, nem üresen)', text: 'ngAfterViewInit a kosárban,+ ngOnDestroy az app komponensben? XD', cols: 1, rows: 1 },
        { title: 'CRUD műveletek mindegyike megvalósult (Promise, Observable használattal)', text: 'nem vagyok benne biztos elvileg csatlakozik a databasehez de nem promis/observe-vel', cols: 1, rows: 2 },
        { title: 'CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek', text: 'ki lettek szervezve de injektalva nem biztos', cols: 1, rows: 2 },
        { title: 'Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen)', text: 'elvileg mukodik lekerdez es irni is tud rá', cols: 1, rows: 2 },
        { title: 'Legalább 2 komplex Firestore lekérdezés megvalósítása (ide tartoznak: where feltétel, rendezés, léptetés, limitálás)', 
        text: 'van egy a bejelentkezésnél ahol fogja és visszaadja a felhasználót amennyiben nem létezik akkor ír hogy hibás a felhasználó de csak ez van rajta (-2p)', cols: 1, rows: 2 },
        { title: 'Legalább 4 különböző route a különböző oldalak eléréséhez', text: 'a navbarban a pagek mind igy mukodnek (kiveve a login de meg ahoz is linkelek)', cols: 1, rows: 2 },
        { title: 'Legalább 2 route levédése azonosítással (AuthGuard) (ahol ennek értelme van, pl.: egy fórum témakör megtekinthető bárki számára, de a regisztrált felhasználó adatai nem)', 
        text: 'mivel a firebase-el nagyon szenvedtem ezt nem birtam megcsinalni -2', cols: 1, rows: 2 },
        { title: 'Szubjektív pontozás a projekt egészére vonatkozólag (mennyire fedi le a projekt a témakört (mennyire kapcsolódik hozzá), mennyi lehet a befektetett energia a projektben)', 
        text: 'hát funkcionálisan megvan az oldal de mivel a firebase szivat ezert a kosarba rakás nem megy, (-1p) regisztrálni tudunk és bejelentkezni is azonban ugye ezt nem validalja kb sehol a rendszer azon felul hogy az email jo-e szoval(-1p) termekek azonban mind adatbazisbol jonnek le es szerintem a kulseje is elfogadhato no? esetleg meg talán kicsit kevés a minta adat szóval legyen -1 point ha szar napond van de plz kegyelmez (idén akarok abszolválni és nem akarok csúszni)', cols: 2, rows: 2 },
      ];
    })
  );
    darkToggle(event:any){
      this.cone = !event.checked
    }
  constructor(private breakpointObserver: BreakpointObserver) {}
}
