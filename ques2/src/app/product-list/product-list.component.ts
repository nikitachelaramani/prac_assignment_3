import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Subscriber } from 'rxjs';
import { Product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=[];
  constructor(private service :ProductService,private routes:Router){
  }
  category=[];
  ngOnInit(): void {
    this.service.getProducts().subscribe((data:Product[])=>{
      // console.log(data);
      this.products=data;
      // this.service.getallCategory().subscribe((Cdata:any)=>{
      //   this.category=Cdata;
      //})      
      // console.log(Cdata);
     this.service.dd().subscribe((Cdata:any)=>{
        this.category=Cdata;
       })
    });

  }
  ondelete(id){
    confirm('Are you Sure Want to delete');
    // console.log(id);
    this.service.deleteProducts(id).subscribe((data)=>{
      // console.log(data)
       this.routes.navigate(['/Product-list']);
    })
   
  }
}
