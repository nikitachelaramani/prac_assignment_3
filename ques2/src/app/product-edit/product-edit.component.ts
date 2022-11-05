import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProduct:any
  constructor(private fb:FormBuilder,private service :ProductService,
    private routes :Router,
    private router:ActivatedRoute)
     { 
      this.editProduct= fb.group({
        Cname:new FormControl(''),  
        Pname:new FormControl(''),   
        color:new FormControl(''),      
        price:new FormControl('')  ,
        _id:new FormControl('')
      })
    }

    OnSelect(e:any){
      this.editProduct.ProductId=e.target.value
   }
    getProduct:any=[];
    ddCategory:any;
    ngOnInit(): void 
    {
      this.router.params.subscribe(params=>
      {
        this.service.getProduct(params['id']).subscribe((data)=>
        {
          this.getProduct=data
          // console.log(data);          
        })
        this.service.getallCategory().subscribe((Cdata)=>
        {
          this.ddCategory=Cdata;
        })
      })
    }
    onUpdate(){
        // console.log(this.editProduct.value)
        this.service.updProduct(this.editProduct.value).subscribe((res:any)=>{
           this.routes.navigate(['Product-list']);
        })
    }
}
