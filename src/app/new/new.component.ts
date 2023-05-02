import { Component,ViewChild,ViewContainerRef,Input} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  @Input() config!:{ [key: string]: any }
    title = 'dynamicLoaderTask';
  
    selectedComponentType!: string;
  
   
  
    loadComponent() {
      console.log(this.selectedComponentType)
    
      // Use the component factory resolver to get the factory for the selected component type
      //const compType=this.selectedComponentType==='ComponentA'?ComponentAComponent:ComponentBComponent
  
     if(this.config[this.selectedComponentType]){
      const componentType=this.config[this.selectedComponentType];
  
  
      // Clear the container before adding the new component
      this.container.clear();
     this.container.createComponent(componentType);
     }
  
      // Create the component and add it to the container
      
    }
}
