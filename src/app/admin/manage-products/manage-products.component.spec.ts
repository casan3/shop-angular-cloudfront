import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { CONFIG_TOKEN } from 'src/app/core/injection-tokens/config.token';
import { ProductsService } from 'src/app/products/products.service';
import { FilePickerModule } from 'src/app/shared/file-picker/file-picker.module';

import { ManageProductsComponent } from './manage-products.component';
import { ManageProductsService } from './manage-products.service';

describe('ProductsComponent', () => {
  let component: ManageProductsComponent;
  let fixture: ComponentFixture<ManageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilePickerModule, MatTableModule],
      providers: [
        {
          provide: ManageProductsService,
          useValue: jasmine.createSpyObj('ManageProductsService', ['']),
        },
        {
          provide: ProductsService,
          useValue: jasmine.createSpyObj('ProductsService', ['getProducts']),
        },
        /* {
          provide: CONFIG_TOKEN,
          useValue: jasmine.createSpyObj('environment', [''])
        },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', [''])
        }, */
      ],
      declarations: [ManageProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
