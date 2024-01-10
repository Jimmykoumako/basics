import { Component, EventEmitter, Input, Output, OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('img') postImg = '';
  @Output() imgSelected = new  EventEmitter<string>()

  constructor(){
    console.log("PostComponent constructor called", this.postImg)
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called', this.postImg)
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called', this.postImg)
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called', this.postImg)
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called', this.postImg)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called', this.postImg)
  }
  ngDoCheck(): void {
    console.log('ngDoCheck() called', this.postImg)
  }
  ngOnInit(): void {
    console.log('ngOnInit() called', this.postImg)
  }

  ngOnDetroy(): void {
    console.log('ngOnDetroy() called', this.postImg)
  }

}