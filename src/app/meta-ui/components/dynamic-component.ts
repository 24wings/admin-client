import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicDynamicComponent } from '../core/basic-dynamic-component';
import { BasicDynamicComponentConfig } from '../core/basic-dynamic-component.config';
import { DynamicDirective } from '../directives/dynamic.directive';
import { ComponentRegisterFactory } from '../services/component-register-factory';
import { ComponentRegisterProvider } from '../services/component-register-provicer';

@Component({ selector: 'dynamic-component', templateUrl: './dynamic-component.html' })
export class DynamicComponent implements OnInit, OnDestroy {
  currentAdIndex = -1;
  @ViewChild(DynamicDirective, { static: true }) dynamic: DynamicDirective;
  interval: any;
  @Input() config: BasicDynamicComponentConfig;
  @Input() data: any;
  @Input() form: FormGroup;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentRegisterFactory: ComponentRegisterFactory,
    private componentRegisterProvider: ComponentRegisterProvider,
  ) {}

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {}

  loadComponent() {
    const component = this.componentRegisterFactory.getComponentByAlias(this.config.componentAlias);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.dynamic.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as BasicDynamicComponent).config = this.config;
    (componentRef.instance as BasicDynamicComponent).data = this.data;
    (componentRef.instance as BasicDynamicComponent).form = this.form;
  }
}
