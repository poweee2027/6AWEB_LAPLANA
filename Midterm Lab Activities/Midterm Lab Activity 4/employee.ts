import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
    return [{
    id: 101,
    firstname: 'Charlie',
    lastname: 'Kirk',
    email: 'ckirk@hau.edu.ph'
  },
  {
    id: 102,
    firstname: 'Justin',
    lastname: 'Miranda',
    email: 'jrmiranda@hau.edu.ph'
  },
  {
    id: 103,
    firstname: 'Jainell',
    lastname: 'Delos Reyes',
    email: 'jidelosreyes@hau.edu.ph'
  },
  {
    id: 104,
    firstname: 'Megalodon',
    lastname: 'Esguerra',
    email: 'mgesguerra@hau.edu.ph'
  },
  {
    id: 105,
    firstname: 'Pipowe',
    lastname: 'Laplana',
    email: 'pblaplana@hau.edu.ph'
  },
]
  }
}
