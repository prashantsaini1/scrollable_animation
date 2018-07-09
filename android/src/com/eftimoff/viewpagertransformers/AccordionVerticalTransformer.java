/*
 * Copyright 2014 Toxic Bakery
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.eftimoff.viewpagertransformers;

import android.view.View;

public class AccordionVerticalTransformer extends BaseTransformer {

	@Override
	protected void onTransform(View view, float position) {
		view.setPivotY(position < 0 ? 0 : view.getHeight());
		view.setScaleY(position < 0 ? 1f + position : 1f - position);
	}

}
