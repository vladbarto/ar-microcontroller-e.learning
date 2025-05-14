import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as THREE from 'three';
import {GraphicsEngineService} from "../../../../core/service/graphics-engine/graphics-engine.service";

@Component({
  selector: 'app-inspector-node',
  templateUrl: './inspector-node.component.html',
  styleUrl: './inspector-node.component.css'
})
export class InspectorNodeComponent {
  @Input() node!: THREE.Object3D;
  @Input() selected!: THREE.Object3D | null;
  @Output() select = new EventEmitter<THREE.Object3D>();

  expanded = true;

  constructor(private graphicsEngine: GraphicsEngineService) {}

  isSelected(): boolean {
    return this.selected?.id === this.node.id;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
