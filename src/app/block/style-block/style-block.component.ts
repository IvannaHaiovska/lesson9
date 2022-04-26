import { Component, OnInit, Input, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-style-block',
  templateUrl: './style-block.component.html',
  styleUrls: ['./style-block.component.css'],
})
export class StyleBlockComponent implements OnInit {

  @Input() isEdit!: boolean;
  @Input() isStyle!: boolean;
  @Input() text!: string
  @Output()
  public outToParentText = new EventEmitter();
  @Output()
  public outToParentSize = new EventEmitter(); 
  @Output()
  public outToParentFamily = new EventEmitter();
  @Output()
  public outToParentColor = new EventEmitter();
  @Output()
  public outToParentBgColor = new EventEmitter();
  @Output()
  public outToParentWeight = new EventEmitter();
  @Output()
  public outToParentStyle = new EventEmitter();
  @Output()
  public outToParentVisible = new EventEmitter();

 
  public editArea!: string;
  public editText!: string;
  public colorBlock = false;
  public bgcolorBlock = false;
  public addElem = false;
  public countLi!: number;
  public selectedType = 'circle';
  public typeLi = ['circle', 'disc', 'square']
  public type!: string;
  public createNewList!: string;
  public countRow!: number;
  public countCell!: number;
  public widthCell!: number;
  public heightCell!: number;
  public borderWidth!: number;
  public selectedBorderType = 'solid';
  public borderTypes = ['solid', 'dashed', 'dotted', 'double'];
  public bType!: string;
  public selectedBorderColor = 'black';
  public borderColors = ['black', 'red', 'blue', 'green'];
  public borderColor!: string;
  public createNewTable!: string;

  public fontSizes = [12, 14, 16, 18, 20];
  public isTable = true;
  public isList = false;
  public table = 'table';
  public list = 'list';
  public textDecor = ['bold', 'italic']
  public colors = ['green', 'silver', 'purple', 'moccasin', 'aqua', 'magenta', 'teal', 'peru', 'yellow'];
  public fontFamily = ['Times New Roman', 'Arial', 'Verdana', 'monospace', 'Gill Sans'];
  public selectedQuantity = 'Times New Roman';

  constructor(
    private eRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.editArea = this.text;
  }
  Add() {
    this.addElem = !this.addElem;
    this.outToParentVisible.emit(this.addElem);
    this.isEdit = false;
  }
  addItem(item: string) {
    if (item == 'table') {
      this.isTable = !this.isTable;
      this.isList = false;
    }
    else if (item == 'list') {
      this.isList = !this.isList;
      this.isTable = false;
    }
  }
  onChangeBorderType(type: any) {
    this.bType = type.target.value;
  }
  onChangeBorderColor(type: any) {
    this.borderColor = type.target.value;
  }

  createTable() {
    this.createNewTable = `<table>`
    for (let i = 0; i < this.countRow; i++) {
      this.createNewTable += `<tr>`;
      for (let j = 0; j < this.countCell; j++) {
        this.createNewTable += `<td style = "width: ${this.widthCell}px; height: ${this.heightCell}px; border: ${this.borderWidth}px ${this.bType || this.selectedBorderType} ${this.borderColor || this.selectedBorderColor}"></td>`;
      }
      this.createNewTable += '</tr>'
    }
    this.createNewTable += '</table>';
    this.editArea += this.createNewTable;
    this.isEdit = true;
    this.addElem = false;
    this.outToParentVisible.emit(this.addElem);

  }
  onChangeType(type: any) {
    this.type = type.target.value;
  }
  createList() {
    this.createNewList = `<ul style=" list-style-type:${this.type || this.selectedType}">`
    for (let i = 0; i < this.countLi; i++) {
      this.createNewList += `<li>item ${i + 1}</li>`;
    }
    this.createNewList += `</ul>`
    this.editArea += this.createNewList;
    this.isEdit = true;
    this.addElem = false;
    this.isTable = true;
    this.isList = false;
    this.outToParentVisible.emit(this.addElem);
  }
  Save() {
    this.editText = this.editArea;
    this.isEdit = false;
    this.outToParentText.emit(this.editText);
  }
  Color() {
    this.colorBlock = !this.colorBlock;
    this.bgcolorBlock = false;
  }
  bgColor() {
    this.bgcolorBlock = !this.bgcolorBlock;
    this.colorBlock = false
  }

  SizeStyle(size: any) {
    this.outToParentSize.emit(size);
  }
  FamilyStyle(ffamily: any) {
    this.outToParentFamily.emit(ffamily.target.value);
  }
  ColorStyle(color: any) {
    this.outToParentColor.emit(color);
  }
  BgColorStyle(bgcolor: string) {
    this.outToParentBgColor.emit(bgcolor);
  }
  WeightStyle(event: any, st: string) {
    if (event.target.checked === true) {
      this.colorBlock = false;
      this.bgcolorBlock = false;
      if (st === 'bold') {
        this.outToParentWeight.emit(st);
      }
      else if (st === 'italic') {
        this.outToParentStyle.emit(st);
      }
    }
    else if ((st === 'bold') && (event.target.checked === false)) {
      this.outToParentWeight.emit('');
    }
    else {
      this.outToParentStyle.emit('');
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.colorBlock = false;
      this.bgcolorBlock = false;
    }
  }
}
