1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANSWER=
getElementById use for selected dom element using by id name.
getElementsByClassName use for selected dom element using by class name.It's return HTMLCollection.
querySelector use for selected dom element using by tag/id/class/attribute name.
querySelector use for selected dom element using by tag/id/class/attribute name. It's return nodelist.

2. How do you create and insert a new element into the DOM?

ANSWER=
step1: create element using document.createElement("tag name");
step2: add content
step3: Find the target
step4: insert element using appentChild()/prepend()/insertbefore() on the target


3. What is Event Bubbling? And how does it work?

ANSWER=
Even bubbling refer if even triggered on a element it also triggered on its parent moving upward through the dom tree to the root.
example
<html>
 <body>
  <div>
    <p onclick="">triggered element</p>
  </div>
 </body>
</html>
triggered element -> parent -> body-> html
p-> div-> body-> html 


4. What is Event Delegation in JavaScript? Why is it useful?

ANSWER=
Event Delegation is a technique where the parent handles child events using event bubbling and the event.target property.
Its useful because improves performance, workes for dynamically added elements, reduces number of event listeners etc.

5. What is the difference between preventDefault() and stopPropagation() methods?

ANSWER=
preventDefault() use for stops the default browser behavior of element.
stopPropagation() use for stops the event from bubbling or capturing to parent elements.
