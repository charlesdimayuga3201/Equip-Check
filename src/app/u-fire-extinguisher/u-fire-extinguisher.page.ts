import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Firestore , collectionData, docData,  doc, addDoc,} from '@angular/fire/firestore';
import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';
export interface E1{
  id?: string;
  ID: string;
  body: string;
  date: string | undefined;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;
  time:string | undefined;

}
export interface E2{
  id?: string;
  ID: string;
  body: string;
  date: string | undefined;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;
  time:string | undefined;

}
export interface E3{
  id?: string;
  ID: string;
  body: string;
  date: string | undefined;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;
  time:string | undefined;

}

@Component({
  selector: 'app-u-fire-extinguisher',
  templateUrl: './u-fire-extinguisher.page.html',
  styleUrls: ['./u-fire-extinguisher.page.scss'],
})

export class UFireExtinguisherPage implements OnInit {
  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  selectedSegment1!: string;
  
  sortedData: any[] = [];
 
  isChecked: boolean = false;
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

  currentTime: string | undefined;
  currentDate!: string;
  dataCollection: any;
  
  selectedItem!: string;
  option1!: string;
  option!: string;
  option2!: string;
  option3!: string;
  radioChecked: any;
  constructor(private platform: Platform, private firestore: Firestore,  private alertController: AlertController, private dataService: DataService) { 
   
    this.currentDate = this.getCurrentDate();
    console.log(this.currentDate);
    this.dataCollection = collection(firestore, 'SD1') as any;
  }
  clearSelection() {
    this.isChecked = false;
   
  }
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async updateData2(){
    // if(this.option === 'check' || this.option === 'notworking' && this.option1 === 'check1' || this.option1 === 'notworking1' && this.option2 === 'check2' || this.option2 === 'notworking2' && this.option3 === 'check3' || this.option3 === 'notworking3'){
      if(this.option && this.option1 && this.option3){  
    this.dataService.addE3({
        ID: 'E3',
        body: this.option3, // Add appropriate value
        date: this.currentDate, // Add appropriate value
        gauge:this.option1, // Add appropriate value
        pinlock: this.option2, // Add appropriate value
        inspected: 'Kc Dimayuga', // Add appropriate value
        nozzle: this.option,
        time: this.currentTime,
         })
         await this.showAlert('Successful Inspect', 'You Successful Inspected The Equipment.');
        
  
    }
      else{  
        await this.showAlert('Invalid to Inspect', 'Please Check All The Parts.');
          }
  
    }

  async updateData1(){
    // if(this.option === 'check' || this.option === 'notworking' && this.option1 === 'check1' || this.option1 === 'notworking1' && this.option2 === 'check2' || this.option2 === 'notworking2' && this.option3 === 'check3' || this.option3 === 'notworking3'){
      if(this.option && this.option1 && this.option3){  
    this.dataService.addE2({
        ID: 'E2',
        body: this.option3, // Add appropriate value
        date: this.currentDate, // Add appropriate value
        gauge:this.option1, // Add appropriate value
        pinlock: this.option2, // Add appropriate value
        inspected: 'Kc Dimayuga', // Add appropriate value
        nozzle: this.option,
        time: this.currentTime,
         })
         await this.showAlert('Successful Inspect', 'You Successful Inspected The Equipment.');
        
  
    }
      else{  
        await this.showAlert('Invalid to Inspect', 'Please Check All The Parts.');
          }
  
    }
  
    async updateData(){
  // if(this.option === 'check' || this.option === 'notworking' && this.option1 === 'check1' || this.option1 === 'notworking1' && this.option2 === 'check2' || this.option2 === 'notworking2' && this.option3 === 'check3' || this.option3 === 'notworking3'){
   
  
  
  if(this.option && this.option1 && this.option3){
  
  
  this.dataService.addE1({
      ID:'E1',
      body: this.option3, // Add appropriate value
      date: this.currentDate, // Add appropriate value
      gauge:this.option1, // Add appropriate value
      pinlock: this.option2, // Add appropriate value
      inspected: 'Kc Dimayuga', // Add appropriate value
      nozzle: this.option,
      time: this.currentTime,
       })
       await this.showAlert('Successful Inspect', 'You Successful Inspected The Equipment.');
      

  }
    else{  
      await this.showAlert('Invalid to Inspect', 'Please Check All The Parts.');
        }
    
    // this.dataService.addE1({date: this.currentDate});
    // console.log('Data updated!');
    // this.dateCollection.add({ date: this.currentDate })
      // .then(() => {
      //   console.log('Document written with current date!');
      // })
      // .catch((error: unknown) => { // Explicitly typing the error parameter
      //   console.error('Error adding document: ', error);
      // });
    
    // Perform the update action
  }
  getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.addLeadingZero(now.getMonth() + 1);
    const day = this.addLeadingZero(now.getDate());
    return `${month}/${day}/${year}`;
    
  }
  addLeadingZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }
  
  
  getCurrentTime() {
    const currentTime = new Date();
    const rawHours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    let meridiem = 'AM';
    let hours = rawHours;

    if (hours === 0) {
  hours = 12;
} else if (hours > 12) {
  hours -= 12;
  meridiem = 'PM';
}
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes} ${meridiem}`;
  }
  getUpdatedTime() {
    this.currentTime = this.getCurrentTime();
  }
  ngOnInit() {
     
     this.getCurrentDate();
     this.getUpdatedTime();
        const collectionRef = collection(this.firestore, 'FireExtinguisher');
    const q = query(collectionRef, orderBy('date', 'desc'), limit(1));
    console.log(q);
    getDocs(q).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData= [latestDocument];
        console.log(this.sortedData);
      });
    });
  }
  radioGroupChange(event: any) {
    const selectedValue = event.detail.value;
    console.log(selectedValue);
    this.option = selectedValue;
  }
  radioGroupChange1(event: any) {
    const selectedValue = event.detail.value;
    console.log(selectedValue);
    this.option1 = selectedValue;
  }
  radioGroupChange2(event: any) {
    const selectedValue = event.detail.value;
    console.log(selectedValue);
    this.option2 = selectedValue;
  }
    radioGroupChange3(event: any) {
    const selectedValue = event.detail.value;
    console.log(selectedValue);
    this.option3 = selectedValue;
  }
}
