// Copyright 2018 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoaderModule} from '../loader';

import {UndamagedDialogComponent} from './index';
import {MaterialModule} from './material_module';

/** Mock material DialogRef. */
class MatDialogRefMock {}

describe('UndamagedDialogComponent', () => {
  let component: UndamagedDialogComponent;
  let fixture: ComponentFixture<UndamagedDialogComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UndamagedDialogComponent],
      imports: [
        BrowserAnimationsModule,
        LoaderModule,
        MaterialModule,
        MatDialogModule,
      ],
      providers: [{
        provide: MatDialogRef,
        useClass: MatDialogRefMock,
      }],
    });

    fixture = TestBed.createComponent(UndamagedDialogComponent);
    component = fixture.debugElement.componentInstance;
    component.deviceId = '123';
    component.ready();
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('creates dialog component', () => {
    expect(component).toBeTruthy();
  });

  it('shows and hides the loader', () => {
    component.waiting();
    fixture.detectChanges();
    expect(compiled.querySelector('loader')).toBeDefined();
    component.ready();
    fixture.detectChanges();
    expect(compiled.querySelector('loader')).toBeFalsy();
  });

  it('renders the correct success title and message', () => {
    component.toBeSubmitted = false;
    component.ready();
    fixture.detectChanges();
    expect(compiled.querySelector('.mat-dialog-title')!.textContent)
        .toBe('Success!');
    expect(compiled.querySelector('.mat-dialog-content')!.textContent)
        .toContain('Device 123 is no longer marked as damaged.');
  });

  it('shows the close button', () => {
    component.toBeSubmitted = false;
    component.ready();
    fixture.detectChanges();
    expect(compiled.querySelector('.action-button')!.textContent)
        .toContain('Close');
  });
});
