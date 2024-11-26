import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataapiService } from '../dataapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
member: any = []; //ประกาศตัวแปรแบบอาเรย์ เพื่อมารับค่า

  constructor(
    private http: HttpClient,
    public dataapi: DataapiService,
    private nav: NavController
  ) {
    this.loadDataMem();
  }

  ngOnInit() {
    this.loadDataMem(); //เรียกใช้งาน ฟังก์ชัน การดึงข้อมูล
}


loadDataMem() {
  this.dataapi.listMember().subscribe({
    next: (res: any) => {
      console.log('แสดงผลข้อมูลได้สำเร็จ');
      this.member = res;
    },
    error: (error: any) => {
      console.log('เกิดข้อผิดพลาดในการแสดงผลข้อมูล', error);
    }
  });

  }
  //ลิงก์ไปหน้ารายละเอียด
  edit(datamem:any){
  this.dataapi.data_detailMen = datamem;
  console.log(datamem);
  this.nav.navigateForward('/edit')
}

  delMem(id : any){
    this.dataapi.delMember(id).subscribe({
      next:(res:any) => {
        console.log("ลบข้อมูลสำเร็จ",res);
        this.loadDataMem
      },
      error:(err:any) => {
        console.log("เกิดข้อผิดพลาดในการลบข้อมูล",err);
      }
    });

  }

}
