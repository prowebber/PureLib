# PureLib

## Overview
PureLib is a lightweight and simple JavaScript library created to replace the usage of jQuery across web 
applications.  PureLib only contains commonly used JavaScript actions and does not support outdated/uncommon browsers.
This significantly reduces file size and load time.


## Usage
1. Download and include `purelib.min.js` in the web application.
2. Use the commands below to access the functions.

### Editing via DOM
These functions expect to receive a DOM value as an argument.  Call in JavaScript with `l.dom.{command(args)}`.

| Command                                         | Action                                                             |
|:------------------------------------------------|:-------------------------------------------------------------------|
| `addClass(dom, className)`                | Add the specified CSS class to the specified DOM element           |
| `addClassToAll(dom, selector, className)` | Add the specified CSS class to all matched elements inside the DOM |
[l.dom]