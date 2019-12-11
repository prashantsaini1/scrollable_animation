# Ti.UI.ScrollableView scroll animations for Android

Glad to publish another Android module for providing a rich-feature set of animations over scrolling pages in Ti.UI.ScrollableView.
This module is based on the [Android ViewPager Transformers](https://github.com/geftimov/android-viewpager-transformers) classes created by [Georgi Eftimov](https://github.com/geftimov)


* Fully customizable as per different requirements.
* Smooth animation transitions.
* More animations coming soon or PR welcomed!


|  ![](https://github.com/prashantsaini1/scrollable_animation/blob/master/demo_1.gif)  |  ![](https://github.com/prashantsaini1/scrollable_animation/blob/master/demo_2.gif)  |


### Requirements & Installation
* Ti SDK >= 7.1.1.GA
* [Download latest module version from here](https://github.com/prashantsaini1/scrollable_animation/raw/master/android/dist/)
* Unzip it, put it in your Titanium project modules folder & add this line to your tiapp.xml <modules> node.

```
<module platform="android">ti.scrollable.animation</module>
```


### Methods
**setAnimation(Ti.UI.ScrollableView, String)**
* Ti.UI.ScrollableView - pass the Ti.UI.ScrollableView instance.
* String - pass an animation constant defined below.

### Animation Constants
* DEFAULT
* ACCORDION_HORIZONTAL
* ACCORDION_VERTICAL
* BACKGROUND_TO_FOREGROUND
* FOREGROUND_TO_BACKGROUND
* BASE
* CUBE_IN
* CUBE_OUT
* DEPTH_PAGE
* DRAW_FROM_BACK
* FLIP_HORIZONTAL
* FLIP_VERTICAL
* ROTATE_DOWN
* ROTATE_UP
* STACK
* TABLET
* ZOOM_IN
* ZOOM_OUT_SLIDE
* ZOOM_OUT

```javascript
var module = require('ti.scrollable.animation');
module.setAnimation($.scrollableView, module.CUBE_OUT);
```

* Checkout the full [Example Code Here](https://github.com/prashantsaini1/scrollable_animation/blob/master/example/app.js)

</br>


<hr/>

## Thanks & Credits
* [Georgi Eftimov](https://github.com/geftimov) for creating the ViewPager transition libraries.
* [Michael Gangolf](https://github.com/m1ga) for helping me out on Slack.

## LICENSE
    Copyright 2015 Georgi Eftimov, 2018 Prashant Saini

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

## Contributions

If you enjoy this module, feel free to contribute with your PR or [donate](https://paypal.me/prashantsainii) :-)
