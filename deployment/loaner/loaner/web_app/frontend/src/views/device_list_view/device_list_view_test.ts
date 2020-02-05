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

import {ConfigService} from '../../services/config';
import {DeviceService} from '../../services/device';
import {ConfigServiceMock, DeviceServiceMock} from '../../testing/mocks';

import {DeviceListView, DeviceListViewModule} from '.';

describe('DeviceListView', () => {
  let fixture: ComponentFixture<DeviceListView>;
  let deviceListView: DeviceListView;

  beforeEach(fakeAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [RouterTestingModule, DeviceListViewModule],
          providers: [
            {provide: ConfigService, useClass: ConfigServiceMock},
            {provide: DeviceService, useClass: DeviceServiceMock},
          ],
        })
        .compileComponents();

    flushMicrotasks();

    fixture = TestBed.createComponent(DeviceListView);
    deviceListView = fixture.debugElement.componentInstance;
  }));

  it('should create the deviceListView', () => {
    expect(deviceListView).toBeTruthy();
  });
});
