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

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {FocusModule} from '../../../../../shared/directives/focus';
import {AnimationMenuService} from '../../../../../shared/services/animation_menu_service';

import {MaterialModule} from './material_module';
import {WelcomeComponent} from './welcome';

@NgModule({
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  imports: [
    CommonModule,
    FocusModule,
    MaterialModule,
  ],
  providers: [AnimationMenuService],
})
export class WelcomeModule {
}

export {WelcomeComponent};
