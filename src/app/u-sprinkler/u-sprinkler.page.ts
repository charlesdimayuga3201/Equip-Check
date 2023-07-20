import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Firestore , collectionData, docData,  doc, addDoc,} from '@angular/fire/firestore';
import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';
export interface S1{
  id?: string;

  date: string | undefined;
  sprinklerhead: string;
  piping: string;
  valves: string;
  backflowpreventer: string;
  pressureregulator: string;
  watersource: string;
  controlpanel: string;
  time: string | undefined;
  inspected:string;

}
@Component({
  selector: 'app-u-sprinkler',
  templateUrl: './u-sprinkler.page.html',
  styleUrls: ['./u-sprinkler.page.scss'],
})
export class USprinklerPage implements OnInit {
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
  isChecked4: boolean = false;
  isChecked5: boolean = false;
  isChecked6: boolean = false;
  isChecked7: boolean = false;

  currentTime: string | undefined;
  currentDate!: string;
  dataCollection: any;
  
  selectedItem!: string;
  option1!: string;
  option!: string;
  option2!: string;
  option3!: string;
  option4!: string;
  option5!: string;
  option6!: string;
  option7!: string;
  radioChecked: any;
  constructor(private platform: Platform, private firestore: Firestore,  private alertController: AlertController, private dataService: DataService) { 
    this.currentDate = this.getCurrentDate();
    console.log(this.currentDate);
  }

  ngOnInit() {
    this.getCurrentDate();
    this.getUpdatedTime();
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
      if(this.option && this.option1 && this.option3 && this.option4 && this.option5 && this.option6){  
    this.dataService.addS1({
        ID: 'S1',
        date: this.currentDate, // Add appropriate value
        sprinklerhead: this.option,
        piping: this.option1,
        valves: this.option2,
        backflowpreventer: this.option5,
        pressureregulator: this.option3,
        watersource: this.option6,
        controlpanel: this.option4,
        inspected: 'Kc Dimayuga', // Add appropriate value
       
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
        if(this.option && this.option1 && this.option3 && this.option4 && this.option5 && this.option6){   
      this.dataService.addS2({
          ID: 'S2',
          date: this.currentDate, // Add appropriate value
          sprinklerhead: this.option,
          piping: this.option1,
          valves: this.option2,
          backflowpreventer: this.option5,
          pressureregulator: this.option3,
          watersource: this.option6,
          controlpanel: this.option4,
          inspected: 'Kc Dimayuga', // Add appropriate value
         
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
          if(this.option && this.option1 && this.option3 && this.option4 && this.option5 && this.option6){  
        this.dataService.addS3({
            ID: 'S3',
            date: this.currentDate, // Add appropriate value
            sprinklerhead: this.option,
            piping: this.option1,
            valves: this.option2,
            backflowpreventer: this.option5,
            pressureregulator: this.option3,
            watersource: this.option6,
            controlpanel: this.option4,
            inspected: 'Kc Dimayuga', // Add appropriate value
           
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
    radioGroupChange4(event: any) {
      const selectedValue = event.detail.value;
      console.log(selectedValue);
      this.option4 = selectedValue;
    }
    radioGroupChange5(event: any) {
      const selectedValue = event.detail.value;
      console.log(selectedValue);
      this.option5 = selectedValue;
    }
    radioGroupChange6(event: any) {
      const selectedValue = event.detail.value;
      console.log(selectedValue);
      this.option6 = selectedValue;
    }
    
}
