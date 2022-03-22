import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils: any[] = [];

    constructor(private httpClient: HttpClient) {
    }

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find((app) => {
            return app.id === id;
        });
        return appareil;
    }

    addAppareil(name: string, status: string) {
        const appareil = {
            id: 0,
            name: '',
            status: ''
        };
        appareil.name = name;
        appareil.status = status;
        appareil.id = this.appareils[this.appareils.length - 1].id + 1;
        this.appareils.push(appareil);
        this.emitAppareilSubject();
    }

    saveAppareilsToServer() {
        this.httpClient
            .put('https://lugand-angular-test-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
            .subscribe({
                next: () => {
                    console.log('Enregistrement terminé !');
                },
                error: (error) => {
                    console.error('Erreur de sauvegarde: ' + error);
                }
            });
    }

    getAppareilsFromServer() {
        this.httpClient
            .get<any[]>('https://lugand-angular-test-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
            .subscribe({
                next: (response) => {
                    console.log('Chargement terminé !');
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                error: (error) => {
                    console.error('Erreur de chargement: ' + error);
                }
            });
    }
}