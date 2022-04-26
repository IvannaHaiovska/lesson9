import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {

  constructor() { }

  public editText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam suscipit molestias? Facere officiis hic, earum iure inventore impedit labore aspernatur ad, placeat, illo quo natus expedita totam at ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nesciunt ipsam blanditiis minima, repudiandae reprehenderit officia eaque ut, libero praesentium aliquid sint qui est quasi accusantium adipisci necessitatibus suscipit quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, consectetur. Animi cupiditate harum ipsum eaque perspiciatis in debitis, aspernatur est, voluptatem recusandae iste illum aut quo numquam, facilis fugit.';
  public size!: any;
  public bgColor!: any;
  public color!: any;
  public ffamily!: any;
  public weight!: any;
  public style!: any;
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
  receiveFromChildVisible(event: boolean) {
    this.visible = event;
  }
}