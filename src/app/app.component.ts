import { Component } from '@angular/core';
<<<<<<< HEAD
import { Storage } from '@ionic/storage-angular';
=======
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD

  constructor(private storage: Storage) {}

  async ngOnInit() {
    // Inicializa el almacenamiento de Ionic cuando el componente se inicializa
    await this.storage.create();
  }
=======
  constructor() {}
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
}
