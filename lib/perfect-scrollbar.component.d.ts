import { NgZone, OnInit, OnDestroy, DoCheck, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PerfectScrollbarConfigInterface } from './perfect-scrollbar.interfaces';
export declare class PerfectScrollbarComponent implements OnInit, OnDestroy, DoCheck {
    private zone;
    private cdRef;
    private platformId;
    states: any;
    indicatorX: boolean;
    indicatorY: boolean;
    interaction: boolean;
    private scrollPositionX;
    private scrollPositionY;
    private scrollDirectionX;
    private scrollDirectionY;
    private usePropagationX;
    private usePropagationY;
    private allowPropagationX;
    private allowPropagationY;
    private stateTimeout;
    private readonly ngDestroy;
    private readonly stateUpdate;
    disabled: boolean;
    usePSClass: boolean;
    autoPropagation: boolean;
    scrollIndicators: boolean;
    config?: PerfectScrollbarConfigInterface;
    psScrollY: EventEmitter<any>;
    psScrollX: EventEmitter<any>;
    psScrollUp: EventEmitter<any>;
    psScrollDown: EventEmitter<any>;
    psScrollLeft: EventEmitter<any>;
    psScrollRight: EventEmitter<any>;
    psYReachEnd: EventEmitter<any>;
    psYReachStart: EventEmitter<any>;
    psXReachEnd: EventEmitter<any>;
    psXReachStart: EventEmitter<any>;
    directiveRef?: PerfectScrollbarDirective;
    constructor(zone: NgZone, cdRef: ChangeDetectorRef, platformId: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    private checkPropagation;
}
