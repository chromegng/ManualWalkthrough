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

import {ComponentFixture, fakeAsync, flushMicrotasks, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {DeviceService} from '../../services/device';
import {DeviceServiceMock} from '../../testing/mocks';


import {DeviceHeader, DeviceHeaderModule} from '.';

describe('DeviceHeader', () => {
  let fixture: ComponentFixture<DeviceHeader>;
  let deviceHeader: DeviceHeader;

  beforeEach(fakeAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [RouterTestingModule, DeviceHeaderModule],
          providers: [
            {provide: DeviceService, useClass: DeviceServiceMock},
          ],
        })
        .compileComponents();

    flushMicrotasks();

    fixture = TestBed.createComponent(DeviceHeader);
    deviceHeader = fixture.debugElement.componentInstance;
  }));

  it('should create the deviceHeader', () => {
    expect(deviceHeader).toBeTruthy();
  });

  it('renders the default card title in a mat-card-title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-card-title').innerText)
        .toContain('Default Title');
  });
});
