﻿function loadComponent(componentID, path) {    var webComponentID = getWebComponentName(path);    var componentName = $$(componentID).name;    if (componentName != webComponentID) {        $$(componentID).loadComponent(path)    }}function getWebComponentName(path) {    var re1 = '(\\/)';    var re2 = '((?:[a-z][a-z]*[0-9]+[a-z0-9]*)||(?:[a-z][a-z]+))';    var re3 = '(.waComponent)';    var p = new RegExp(re1 + re2 + re3, ["i"]);    var m = p.exec(path);    if (m != null) {        return m[2];    }}