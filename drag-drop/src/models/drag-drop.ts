// Drag & Drop Interfaces

namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    // signal the browser & js that dragging something over is a valid drag target(permit to the drop)
    dragOverHandler(event: DragEvent): void;
    // react to the actual drop that happens.
    dropHandler(event: DragEvent): void;
    // visual feedback to users when they drag something over the box if no drop happens & instead it's cancelled or removed
    dragLeaveHandler(event: DragEvent): void;
  }
}
