
import { Injectable } from '@angular/core';
import { Firestore , collectionData, docData,  collection, doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
;



export interface FireExtinguisher{
  id?: string;
  body: string;
  date: string;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;

}
export interface ListFireExtinguisher{
  id?: string;
  building: string;
  floor: string;

}
export interface E1{
  id?: string;
  body: string;
  date: string | undefined;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string; 
  time: string | undefined;
}
export interface E2{
  id?: string;
  body: string;
  date: string;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;

}
export interface E3{
  id?: string;
  body: string;
  date: string;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;

}

export interface SD1{
  id?: string;

  date: string;
  powersource: string;
  smokesensor: string;
  sound: string;
  time: string;
  inspected:string;

}
export interface SD2{
  id?: string;

  date: string;
  powersource: string;
  smokesensor: string;
  sound: string;
  time: string;
  inspected:string;

}

export interface SD3{
  id?: string;

  date: string;
  powersource: string;
  smokesensor: string;
  sound: string;
  time: string;
  inspected:string;

}

export interface S1{
  id?: string;

  date: string;
  sprinklerhead: string;
  piping: string;
  valves: string;
  backflowpreventer: string;
  pressureregulator: string;
  watersource: string;
  controlpanel: string;
  time: string;
  inspected:string;

}
export interface S2{
  id?: string;

  date: string;
  sprinklerhead: string;
  piping: string;
  valves: string;
  backflowpreventer: string;
  pressureregulator: string;
  watersource: string;
  controlpanel: string;
  time: string;
  inspected:string;

}
export interface S3{
  id?: string;

  date: string;
  sprinklerhead: string;
  piping: string;
  valves: string;
  backflowpreventer: string;
  pressureregulator: string;
  watersource: string;
  controlpanel: string;
  time: string;
  inspected:string;

}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor( private firestore:Firestore) { }
  getE1(): Observable<E1[]> {
    const E1Ref = collection(this.firestore, 'E1')
    return collectionData(E1Ref, {idField: 'id'}) as Observable<E1[]>;
  } 
  getE1ById(id:string): Observable<E1[]> {
    const E1DocRef = doc(this.firestore, `E1/${id}`);
    return docData(E1DocRef, {idField: 'id'}) as Observable<E1[]>;
  }
  addE1(E1: E1) {
    const E1Ref = collection(this.firestore, 'E1')
    return addDoc(E1Ref, E1)
  }




  getE2(): Observable<E2[]> {
    const E2Ref = collection(this.firestore, 'E2')
    return collectionData(E2Ref, {idField: 'id'}) as Observable<E2[]>;
  } 
  getE2ById(id:string): Observable<E2[]> {
    const E2DocRef = doc(this.firestore, `E2/${id}`);
    return docData(E2DocRef, {idField: 'id'}) as Observable<E2[]>;
  }
  getE3(): Observable<E3[]> {
    const E3Ref = collection(this.firestore, 'E3')
    return collectionData(E3Ref, {idField: 'id'}) as Observable<E3[]>;
  } 
  getE3ById(id:string): Observable<E3[]> {
    const E3DocRef = doc(this.firestore, `E3/${id}`);
    return docData(E3DocRef, {idField: 'id'}) as Observable<E3[]>;
  }


  getSD1(): Observable<SD1[]> {
    const SD1Ref = collection(this.firestore, 'SD1')
    return collectionData(SD1Ref, {idField: 'id'}) as Observable<SD1[]>;
  } 
  getSD1ById(id:string): Observable<SD1[]> {
    const SD1DocRef = doc(this.firestore, `SD1/${id}`);
    return docData(SD1DocRef, {idField: 'id'}) as Observable<SD1[]>;
  }
  getSD2(): Observable<SD2[]> {
    const SD2Ref = collection(this.firestore, 'SD2')
    return collectionData(SD2Ref, {idField: 'id'}) as Observable<SD2[]>;
  } 
  getSD2ById(id:string): Observable<SD2[]> {
    const SD2DocRef = doc(this.firestore, `SD2/${id}`);
    return docData(SD2DocRef, {idField: 'id'}) as Observable<SD2[]>;
  }
  getSD3(): Observable<SD3[]> {
    const SD3Ref = collection(this.firestore, 'SD3')
    return collectionData(SD3Ref, {idField: 'id'}) as Observable<SD3[]>;
  } 
  getSD3ById(id:string): Observable<SD3[]> {
    const SD3DocRef = doc(this.firestore, `SD3/${id}`);
    return docData(SD3DocRef, {idField: 'id'}) as Observable<SD3[]>;
  }

  getS1(): Observable<S1[]> {
    const S1Ref = collection(this.firestore, 'S1')
    return collectionData(S1Ref, {idField: 'id'}) as Observable<S1[]>;
  } 
  getS1ById(id:string): Observable<S1[]> {
    const S1DocRef = doc(this.firestore, `S1/${id}`);
    return docData(S1DocRef, {idField: 'id'}) as Observable<S1[]>;
  }
  getS2(): Observable<S2[]> {
    const S2Ref = collection(this.firestore, 'S2')
    return collectionData(S2Ref, {idField: 'id'}) as Observable<S2[]>;
  } 
  getS2ById(id:string): Observable<S2[]> {
    const S2DocRef = doc(this.firestore, `S2/${id}`);
    return docData(S2DocRef, {idField: 'id'}) as Observable<S2[]>;
  }
  getS3(): Observable<S3[]> {
    const S3Ref = collection(this.firestore, 'S3')
    return collectionData(S3Ref, {idField: 'id'}) as Observable<S3[]>;
  } 
  getS3ById(id:string): Observable<S3[]> {
    const S3DocRef = doc(this.firestore, `S3/${id}`);
    return docData(S3DocRef, {idField: 'id'}) as Observable<S3[]>;
  }



  getListFireExtinguisher(): Observable<ListFireExtinguisher[]> {
    const ListFireExtinguisherRef = collection(this.firestore, 'ListFireExtinguisher')
    return collectionData(ListFireExtinguisherRef, {idField: 'id'}) as Observable<ListFireExtinguisher[]>;
  } 
  getListFireExtinguisherById(id:string): Observable<ListFireExtinguisher[]> {
    const ListFireExtinguisherDocRef = doc(this.firestore, `ListFireExtinguisher/${id}`);
    return docData(ListFireExtinguisherDocRef, {idField: 'id'}) as Observable<ListFireExtinguisher[]>;
  } 

  getFireExtinguisher(): Observable<FireExtinguisher[]> {
    const FireExtinguisherRef = collection(this.firestore, 'FireExtinguisher')
    return collectionData(FireExtinguisherRef, {idField: 'id'}) as Observable<FireExtinguisher[]>;
  } 
  getFireExtinguisherById(id:string): Observable<FireExtinguisher[]> {
    const FireExtinguisherDocRef = doc(this.firestore, `FireExtinguisher/${id}`);
    return docData(FireExtinguisherDocRef, {idField: 'id'}) as Observable<FireExtinguisher[]>;
  } 
  
  
}
;