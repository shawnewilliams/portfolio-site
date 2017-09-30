import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaperScope, Project, Path, Point } from 'paper';

@Component({
  selector: 'app-paper-canvas',
  templateUrl: './paper-canvas.component.html',
  styleUrls: ['./paper-canvas.component.css']
})
export class PaperCanvasComponent implements OnInit {

  @ViewChild('canvasElement') canvasElement: ElementRef;
  scope: PaperScope;
  project: Project;

  keyData: any = {
    q: {
      color: '#1abc9c'
    },
    w: {
      color: '#2ecc71'
    },
    e: {
      color: '#3498db'
    },
    r: {
      color: '#9b59b6'
    },
      t: {
      color: '#34495e'
    },
    y: {
      color: '#16a085'
    },
    u: {
      color: '#27ae60'
    },
    i: {
      color: '#2980b9'
    },
    o: {
      color: '#8e44ad'
    },
    p: {
      color: '#2c3e50'
    },
    a: {
      color: '#f1c40f'
    },
    s: {
      color: '#e67e22'
    },
      d: {
      color: '#e74c3c'
    },
    f: {
      color: '#95a5a6'
    },
    g: {
      color: '#f39c12'
    },
    h: {
      color: '#d35400'
    },
    j: {
      color: '#1abc9c'
    },
    k: {
      color: '#2ecc71'
    },
    l: {
      color: '#3498db'
    },
    z: {
      color: '#9b59b6'
    },
    x: {
      color: '#34495e'
    },
    c: {
      color: '#16a085'
    },
    v: {
      color: '#27ae60'
    },
    b: {
      color: '#2980b9'
    },
    n: {
      color: '#8e44ad'
    },
    m: {
      color: '#2c3e50'
    }
  }
  
      circles: any[];
  
      onKeyDown(event) {
        if(this.keyData[event.key]){
        
          var maxPoint: any = new Point(500, 500);
          var randomPoint: any = Point.random();
          var point: any = maxPoint * randomPoint;
          var newCircle = new Path.Circle(point,500);
          newCircle.fillColor = this.keyData[event.key].color;
          // this.keyData[event.key].sound.play();
          this.circles.push(newCircle);
        }
      }
  
      onFrame(event){
        for(var i = 0; i < this.circles.length; i++){
          this.circles[i].fillColor.hue +=1;
          this.circles[i].scale(.9);
          if(this.circles[i].area < 1){
            this.circles[i].remove();
            this.circles.splice(i, 1);
            console.log(this.circles);
          }
        }
      }
  

  constructor() { 
    this.onKeyDown(onkeydown);
      this.onFrame(onkeydown);
  }

  ngOnInit() {
      this.scope = new PaperScope();
      this.project = new Project(this.canvasElement.nativeElement);
      
  }


  
}
