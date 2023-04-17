import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  @Input() showAddClient = false;
  @Output() toggle = new EventEmitter<any>();

  toggleAddClient() {
    this.showAddClient = !this.showAddClient;
    this.toggle.emit(this.showAddClient);
  }

  ngOnInit() {
    const select = document.getElementById("type") as HTMLSelectElement;
    const sirenInput = document.querySelectorAll('.optional');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-button');
    const annulerBtn = document.querySelector('.btn-annuler');
    const overlay = document.querySelector('.overlay');

    const removeHidden = function () {
      modal?.classList.remove('hidden');
      overlay?.classList.remove('hidden');
    }

    const addHidden = function () {
      modal?.classList.add('hidden');
      overlay?.classList.add('hidden');
    }

    select.addEventListener("change", (event) => {
      if (select.value === "entreprise") {
        sirenInput.forEach((input => input.classList.remove("hidden")));
      } else {
        sirenInput.forEach((input => input.classList.add("hidden")));
      }
    });

    closeBtn?.addEventListener('click', addHidden);
    annulerBtn?.addEventListener('click', addHidden);
    overlay?.addEventListener('click', addHidden);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !modal?.classList.contains('hidden'))
        addHidden();
    });

  }
}