import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() selectedFeature: string = ''; // Receive the current feature
  @Output() selectedFeatureChange = new EventEmitter<string>(); // Emit changes

  /**
   * Handle feature selection.
   * @param feature - The selected feature.
   */
  onSelect(feature: string): void {
    this.selectedFeature = feature; // Update local value
    this.selectedFeatureChange.emit(feature); // Emit change to parent
 }
}
