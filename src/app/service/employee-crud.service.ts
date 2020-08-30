import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(public afs: AngularFirestore) { }

  
  create_Employee(employeeFirstName,employeeLastName,employeeAddress,employeeDOB){
    return this.afs.collection('employee-contact-info').add({
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeeAddress: employeeAddress,
      employeeDOB: employeeDOB
    })
  }
  
  retrieve_Employee(){
    return this.afs.collection('employee-contact-info').snapshotChanges();
  }

  update_Employee(employeeId,employeeFirstName,employeeLastName,employeeAddress,employeeDOB){
    this.afs.doc('employee-contact-info/' + employeeId).update({
      employeeFirstName : employeeFirstName,
      employeeLastName: employeeLastName,
      employeeAddress: employeeAddress,
      employeeDOB: employeeDOB
    })
  }

  delete_Employee(employeeId){
    this.afs.doc('employee-contact-info/' + employeeId).delete()
  }

}
