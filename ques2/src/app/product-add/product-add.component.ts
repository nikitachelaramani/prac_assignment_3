import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 addForm:any;
 
  constructor(
    private fb : FormBuilder,
    private service:ProductService,
    private routes:Router
    ) {
    this.addForm=fb.group({
      Cname:new FormControl(''),  
      Pname:new FormControl(''),   
      color:new FormControl(''),      
      price:new FormControl(''),
      warranty:new FormControl('')     
    })
   }
   ddCategory:any;
   ngOnInit(): void {
    this.service.getallCategory().subscribe((data)=>{
      this.ddCategory=data;
    })
  }
  onSubmit(){
   // this.service.addProduct(this.addForm.value)
    this.service.addProduct(this.addForm.value)   
    .subscribe((data:any)=>{ 
      console.log(data)
    })
    this.routes.navigate(['Product-list']);    
  }   
  OnSelect(e:any){
     this.addForm.ProductId=e.target.value
  }
}
