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

import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AnimationMenuService} from '../../services/animation_menu_service';

import {AnimationMenuComponent} from './animation_menu';
import {MaterialModule} from './material_module';

@NgModule({
  declarations: [AnimationMenuComponent],
  entryComponents: [AnimationMenuComponent],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [AnimationMenuService],
})
export class AnimationMenuModule {
}

export * from './animation_menu';
export * from '../../services/animation_menu_service';
