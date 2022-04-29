import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';


import { List } from 'src/app/shared/interface/list/list';
import { Table } from 'src/app/shared/interface/table/table';
import { Style } from 'src/app/shared/interface/style/style';

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
  public outToParentDecor = new EventEmitter();
  @Output()
  public outToParentVisible = new EventEmitter();

  public tagBtn = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'];
  public editArea!: string;
  public editText!: string;
  public colorBlock = false;
  public bgcolorBlock = false;
  public addElem = false;
  public listForm: List = {
    countLi: '',
    typeLiUl: ['circle', 'disc', 'square'],
    typeLiOl: ['decimal',
      'upper-roman', 'lower-alpha', 'upper-alpha', 'lower-greek']
  };
  public selectedTypeUl = 'circle';
  public selectedTypeOl = 'decimal';
  public type!: string;
  public createNewList!: string;

  public tableForm: Table = {
    countRow: '',
    countCell: '',
    widthCell: '',
    heightCell: '',
    borderWidth: '',
    borderTypes: ['solid', 'dashed', 'dotted', 'double'],
    borderColors: '#775035e6'
  };
  public selectedBorderType = 'solid';
  public bType!: string;
  public selectedBorderColor = 'black';
  public borderColor!: string;
  public createNewTable!: string;
  public example = '';
  public closeExample = true;

  public styleForm: Style = {
    fontSize: [12, 14, 16, 18, 20, 22, 24],
    fontFamily: ['Times New Roman', 'Arial', 'Verdana', 'monospace', 'Gill Sans'],
    bgcolor: "#71717e",
    color: "#f0f0f0",
    textDecor: ['Жирний', 'Курсив', 'Підкреслений']
  }
  public addList = false;
  public listType!: any;
  public ol = 'ol';
  public ul = 'ul';
  public isOl = false;
  public isUl = false;
  public isTable = true;
  public isList = false;
  public table = 'table';
  public list = 'list';
  public selectedQuantity = 'Times New Roman';

  constructor() { }

  ngOnInit(): void {
    this.editArea = this.text;
  }
  Tag(tag: string) {
    this.editArea += `<${tag}></${tag}>`
  }
  Add() {
    this.addElem = !this.addElem;
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

  addTypeList(item: any) {
    if (item == 'ol') {
      this.listType = 'ol';
      this.isOl = true;
      this.isUl = false;
    }
    else if (item == 'ul') {
      this.listType = 'ul';
      this.isOl = false;
      this.isUl = true;
    }
    this.addList = true;
  }


  onChangeBorderType(type: any) {
    this.bType = type.target.value;
  }
  onChangeBorderColor() {
    this.borderColor = this.tableForm.borderColors;
  }
  createT() {
    this.createNewTable = `<table>`
    for (let i = 0; i < this.tableForm.countRow; i++) {
      this.createNewTable += `<tr>`;
      for (let j = 0; j < this.tableForm.countCell; j++) {
        this.createNewTable += `<td style = "width: ${this.tableForm.widthCell}px; height: ${this.tableForm.heightCell}px; border: ${this.tableForm.borderWidth}px ${this.bType || this.selectedBorderType} ${this.borderColor || this.selectedBorderColor}"></td>`;
      }
      this.createNewTable += '</tr>'
    }
    this.createNewTable += '</table>';
  }
  createL() {
    this.createNewList = `<${this.listType} style=" list-style-type:${this.type || this.selectedTypeUl || this.selectedTypeOl}">`
    for (let i = 0; i < this.listForm.countLi; i++) {
      this.createNewList += `<li></li>`;
    }
    this.createNewList += `</${this.listType}>`
  }
  Example() {
    this.closeExample = true;
    this.createT();
    this.example += this.createNewTable;
    this.createL();
    this.example += this.createNewList;
  }
  CloseExample() {
    this.closeExample = false;
    this.example = '';
  }
  createTable() {
    this.createT();
    this.editArea += this.createNewTable;
    this.isEdit = true;
    this.addElem = false;
    this.example = '';
    this.tableForm = {
      countRow: '',
      countCell: '',
      widthCell: '',
      heightCell: '',
      borderWidth: '',
      borderTypes: ['solid', 'dashed', 'dotted', 'double'],
      borderColors: '#775035e6'
    };
  }


  onChangeType(type: any) {
    this.type = type.target.value;
  }
  createList() {
    this.createL();
    this.editArea += this.createNewList;
    this.isEdit = true;
    this.addElem = false;
    this.example = '';
    this.listForm.countLi = '';
  }
  Save() {
    this.editText = this.editArea;
    this.outToParentText.emit(this.editText);
  }

  SizeStyle(size: any) {
    this.outToParentSize.emit(size);
  }
  FamilyStyle(ffamily: any) {
    this.outToParentFamily.emit(ffamily.target.value);
  }

  ColorStyle() {
    this.outToParentColor.emit(this.styleForm.color);
  }

  BgColorStyle() {
    this.outToParentBgColor.emit(this.styleForm.bgcolor);
  }
  WeightStyle(event: any, st: string) {
    if (event.target.checked === true) {
      this.colorBlock = false;
      this.bgcolorBlock = false;
      if (st === 'Жирний') {
        this.outToParentWeight.emit('bold');
      }
      else if (st === 'Курсив') {
        this.outToParentStyle.emit('italic');
      }
      else if (st === 'Підкреслений') {
        this.outToParentDecor.emit('underline');
      }
    }
    else if ((st === 'Жирний') && (event.target.checked === false)) {
      this.outToParentWeight.emit('');
    }
    else if ((st === 'Курсив') && (event.target.checked === false)) {
      this.outToParentStyle.emit('');
    }
    else {
      this.outToParentDecor.emit('');
    }
  }


}
