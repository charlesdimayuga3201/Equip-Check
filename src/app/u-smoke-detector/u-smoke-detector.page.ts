import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Firestore , collectionData, docData,  doc, addDoc,} from '@angular/fire/firestore';
import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';
export interface SD1{
  id?: string;
  ID: string;
  date: string | undefined;
  powersource: string;
  smokesensor: string;
  sound: string;
  time: string  | undefined;
  inspected:string;
  capacity: string;
}
@Component({
  selector: 'app-u-smoke-detector',
  templateUrl: './u-smoke-detector.page.html',
  styleUrls: ['./u-smoke-detector.page.scss'],
})
export class USmokeDetectorPage implements OnInit {
 
  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  selectedSegment1!: string;
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
   }
   async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

   async updateData(){
    // if(this.option === 'check' || this.option === 'notworking' && this.option1 === 'check1' || this.option1 === 'notworking1' && this.option2 === 'check2' || this.option2 === 'notworking2' && this.option3 === 'check3' || this.option3 === 'notworking3'){
      if(this.option && this.option1 && this.option2){ 
    this.dataService.addSD1({
        ID: 'SD1',
        smokesensor: this.option1, // Add appropriate value
        date: this.currentDate, // Add appropriate value
        powersource:this.option, // Add appropriate value
        sound: this.option2, // Add appropriate value
        inspected: 'Kc Dimayuga', // Add appropriate value
        capacity: '03/24/2028',
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
        if(this.option && this.option1 && this.option2){ 
      this.dataService.addSD2({
          ID: 'SD2',
          smokesensor: this.option1, // Add appropriate value
          date: this.currentDate, // Add appropriate value
          powersource:this.option, // Add appropriate value
          sound: this.option2, // Add appropriate value
          inspected: 'Kc Dimayuga', // Add appropriate value
          capacity: '03/24/2028',
          time: this.currentTime,
           })
           await this.showAlert('Successful Inspect', 'You Successful Inspected The Equipment.');
          
    
      }
        else{  
          await this.showAlert('Invalid to Inspect', 'Please Check All The Parts.');
            }
    
      }
      async updateData2(){
        // if(this.option === 'check' || this.option === 'notworking' && this.option1 === 'check1' || this.option1 === 'notworking1' && this.option2 === 'check2' || this.option2 === 'notworking2' && this.option3 === 'check3' || this.option3 === 'notworking3'){
          if(this.option && this.option1 && this.option2){  
        this.dataService.addSD3({
            ID: 'SD3',
            smokesensor: this.option1, // Add appropriate value
            date: this.currentDate, // Add appropriate value
            powersource:this.option, // Add appropriate value
            sound: this.option2, // Add appropriate value
            inspected: 'Kc Dimayuga', // Add appropriate value
            capacity: '03/24/2028',
            time: this.currentTime,
             })
             await this.showAlert('Successful Inspect', 'You Successful Inspected The Equipment.');
            
      
        }
          else{  
            await this.showAlert('Invalid to Inspect', 'Please Check All The Parts.');
              }
      
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
