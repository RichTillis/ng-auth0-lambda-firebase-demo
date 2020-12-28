import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth0Authenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuth0Authenticate$ = this.auth0Authenticated$.asObservable();

  private awsLambdaAuthTokenGenerated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAwsLambdaAuthTokenGenerated$ = this.awsLambdaAuthTokenGenerated$.asObservable();

  private firebaseAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isFirebaseAuthenticated$ = this.firebaseAuthenticated$.asObservable();

  constructor() { }

  loginToAuth0(){
    this.auth0Authenticated$.next(true);
  }

  logout(){
    this.auth0Authenticated$.next(false);
    this.awsLambdaAuthTokenGenerated$.next(false);
    this.firebaseAuthenticated$.next(false);
  }

  getTokenFromLambda(){
    this.awsLambdaAuthTokenGenerated$.next(true);
  }

  loginToFirebase(){
    this.firebaseAuthenticated$.next(true);
  }
}
