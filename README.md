# hideHeader
Hide your header on scroll - angularJS directive

This is a simple directive for AnuglarJS, which hides your navbar (or any element) on scroll with customizable Parameters:

```
<div id="toggle_wrapper" class="topped" hide-header elm="#intro_wrapper" toggle-class="scrolling" hide-after="250" hide-class="slide-up">
```

```elm:```  elm to check offset for

```toggleClass:``` class to toggle when after @elm

```hideAfter: ``` value after which the element gets a new class

```hideClass:``` class to toggle when after @elm and after @hideAfter
