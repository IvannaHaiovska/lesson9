import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {

  constructor() { }

  public editText = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam suscipit molestias? Facere officiis hic, earum iure inventore impedit labore aspernatur ad, placeat, illo quo natus expedita totam at ut.</p>';
  public size!: any;
  public bgColor!: any;
  public color!: any;
  public ffamily!: any;
  public weight!: any;
  public style!: any;
  public decor!: any;
  public text = '';
  public visible!: boolean;
  public tableStyle!: any;

  ngOnInit(): void {
    this.receiveFromChildText(this.editText);
    this.receiveFromChildTable2(this.tableStyle);
  }


  receiveFromChildText(event: string) {
    this.editText = event;
    this.update();
  }

  update() {
    this.text = this.editText;
  }
  receiveFromChildTable2(event: any) {
    this.tableStyle = event;
  }
  receiveFromChildSize(event: string) {
    this.size = event;
  }
  receiveFromChildFamily(event: string) {
    this.ffamily = event;
  }
  receiveFromChildColor(event: string) {
    this.color = event;
    console.log(this.color);

  }
  receiveFromChildBgColor(event: string) {
    this.bgColor = event;
  }
  receiveFromChildWeight(event: string) {
    this.weight = event;
  }
  receiveFromChildStyle(event: string) {
    this.style = event;
  }
  receiveFromChildDecor(event: string) {
    this.decor = event;
  }
  receiveFromChildVisible(event: boolean) {
    this.visible = event;
  }
}