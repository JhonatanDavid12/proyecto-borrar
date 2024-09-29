import { Injectable } from '@angular/core';
import { getAuth
  , signInWithEmailAndPassword
  , signOut
  , createUserWithEmailAndPassword
  , onAuthStateChanged
  , User
  , UserCredential } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { Observable, from, tap, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../environment/environment";
import { Auth } from '@angular/fire/auth'

// paso 1
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // paso 2
  user$: Observable<User | null>;

  // paso 3
  constructor(private auth: Auth) {
    this.auth.tenantId = environment.firebase.tenantId;

    // paso 4
    this.user$ = new Observable<User | null>((subscriber) => {
      onAuthStateChanged(this.auth, (user) => {
        subscriber.next(user);
      });
    });
  }

  // paso 5
  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap((userCredential: UserCredential) => {

        console.log('Logged in user:', userCredential.user);
      }),
      catchError(err => {
        console.error('Login error:', err);
        return new Observable(observer => observer.error(err));
      })
    );
  }

  // paso 6
  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(map(user => !!user));
  }
}


