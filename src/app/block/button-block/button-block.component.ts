import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.css']
})
export class ButtonBlockComponent implements OnInit {

  @Input() newText!: string;
  @Input() text!: string;
  @Output()
  public outToParentText2 = new EventEmitter();
  @Output()
  public outToParentSize2 = new EventEmitter();
  @Output()
  public outToParentFamily2 = new EventEmitter();
  @Output()
  public outToParentColor2 = new EventEmitter();
  @Output()
  public outToParentBgColor2 = new EventEmitter();
  @Output()
  public outToParentWeight2 = new EventEmitter();
  @Output()
  public outToParentStyle2 = new EventEmitter();
  @Output()
  public outToParentDecor2 = new EventEmitter();
  @Output()
  public outToParentVisible = new EventEmitter();
  @Output()
  public outToParentTable2 = new EventEmitter();


  public isEdit = false;
  public isStyle = false;
  public visible!: boolean;
  public block = false;
  public password!: any;
  public incorrectPassword = false;
  constructor() { }
  ngOnInit(): void {
  }

  getEdit(): void {
    this.isEdit = !this.isEdit;
    this.isStyle = false;
  }
  getStyle(): void {
    this.isStyle = !this.isStyle;
    this.isEdit = false;
  }
  getBlock() {
    this.block = true;
  }
  Unblock() {
    if (this.password === '1111aaaa') {
      this.block = false;
      this.incorrectPassword = false;
    }
    else {
      this.incorrectPassword = true;
    }
    this.password = '';
  }
  receiveFromChildText(event: string) {
    this.outToParentText2.emit(event);
  }
  receiveFromChildTable2(event: any) {
    this.outToParentTable2.emit(event);

  }
  receiveFromChildSize(event: string) {
    this.outToParentSize2.emit(event);
  }
  receiveFromChildFamily(event: string) {
    this.outToParentFamily2.emit(event);
  }
  receiveFromChildColor(event: string) {
    this.outToParentColor2.emit(event);
  }
  receiveFromChildBgColor(event: string) {
    this.outToParentBgColor2.emit(event);
  }
  receiveFromChildWeight(event: string) {
    this.outToParentWeight2.emit(event);
  }
  receiveFromChildStyle(event: string) {
    this.outToParentStyle2.emit(event);
  }
  receiveFromChildDecor(event: string) {
    this.outToParentDecor2.emit(event);
  }
  receiveFromChildVisible(event: boolean) {
    this.visible = event;
    this.outToParentVisible.emit(this.visible);
  }
}
