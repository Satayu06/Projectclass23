import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //ประกาศตัวแปรเพื่อรับค่า home page .html
  dataMember:any={};

  txtidstu:any;
  txtname:any;
  txtnname:any;
  txtage:any;
  txtphone:any;
  txtaddress:any;
  txtstatus:any;

  //ตัวแปรส่งไปยัง api
  id_stu:any;
  name:any;
  nname:any
  age:any;
  phone:any;
  address:any;
  status:any;

  // postidstu:any;
  // postname:any;
  // postnname:any;
  // postage:any;
  // postphone:any;
  // postaddress:any;
  // poststatus:any;

  constructor(
    public dataapi: DataapiService,
    private route:Router
  ) {}

  //ฟังก์ชันสำหรับการเพิ่มข้อมูล

  addmember(){
    let data = {
      id_stu:this.txtidstu,
      name:this.txtname,
      nname:this.txtnname,
      age:this.txtage,
      phone:this.txtphone,
      address:this.txtaddress,
      status:this.txtstatus
    }

    this.dataapi.addMember(data).subscribe({
      next: (res:any) => {
        console.log("ข้อมูลถูกเพิ่ม", res);
      },
      error: (error: any) => {
        console.log("ข้อมูลไม่ถูกเพิ่ม", error);
      }
    });
  this.clearForm();
  }

  //ฟังก์ชันสำหรับล้างข้อมูล
  clearForm(){
    this.txtidstu ='';
    this.txtname = '';
    this.txtnname ='';
    this.txtage = '';
    this.txtphone = '';
    this.txtaddress = '';
    this.txtstatus = '';
  }
  showdata(){
    this.route.navigate(['/show']);
  }

  /*test(){
    console.log("ค่าที่กรอก",this.txtidstu)
    console.log("ค่าที่กรอก",this.txtname)
    console.log("ค่าที่กรอก",this.txtnname)
    console.log("ค่าที่กรอก",this.age)
    console.log("ค่าที่กรอก",this.phone)
    console.log("ค่าที่กรอก",this.txtaddress)
    console.log("ค่าที่กรอก",this.txtstatus)
  }*/


}
