//!Create Element
// const heading = document.createElement("h1")
// heading.innerHTML="<i>Hi</i>"
// document.body.append(heading)

//!example

//*create part
/*const header = document.createElement("header")
const navigation = document.createElement("nav")
const un = document.createElement("ul")
const list = document.createElement("li")
const heading = document.createElement("h1")
const divison = document.getElementById("container")


//*Content part
heading.innerHTML="<i>Hi this is dynamically created h1 tag with italics in innerHTML</i>"


//*attributes part
heading.setAttribute("class","heading")
heading.classList.add("head","heading1")
heading.classList.remove("head","heading1")
heading.setAttribute("id","container")
heading.setAttribute("style", "background-color:black;color:aqua")


//*append part
list.appendChild(heading)
un.appendChild(list)
navigation.appendChild(un)
header.appendChild(navigation)
document.body.append(header)
*/

//!multiple element creation dynamically
function elements(tagname,content,attrname,attrvalue){
const ele = document.createElement(tagname)
ele.innerHTML = content
ele.setAttribute(attrname,attrvalue)
return ele;
}
const h1 = elements("h1","Hi this is created using function","class","heading")
const header = elements("header","","class","header","id","head")
const nav = elements("nav","","class","navigation" )
const ul = elements("ul","","class","unorder")
const li = elements("li","","class","list")
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li)
li.appendChild(h1)
document.body.append(header)