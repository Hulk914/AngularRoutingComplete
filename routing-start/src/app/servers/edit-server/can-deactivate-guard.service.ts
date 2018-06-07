import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot, 
        nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return component.canDeactivate(); //this is the interface function call
        }//This can deactivate is the one which gets executed when we try to exit page.
        //in argument we pass component which implements the interface above and hence is of the same type
}