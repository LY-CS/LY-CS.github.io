(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{212:function(e,s,n){"use strict";n.r(s);var a=n(0),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"csharp基础·字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#csharp基础·字符串"}},[e._v("#")]),e._v(" CSharp基础·字符串")]),e._v(" "),n("h2",{attrs:{id:"csharp基础·字符串·特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#csharp基础·字符串·特性"}},[e._v("#")]),e._v(" CSharp基础·字符串·特性")]),e._v(" "),n("p",[e._v("不可变性：不管对字符串做什么操作，都会在内存中产生一块新的实例。")]),e._v(" "),n("p",[e._v("驻留池（暂存池）：新建字符串并不会立刻开辟空间，而是查找是否有相同的字符串已经存在于系统，有则指向该字符串地址，无则开辟。")]),e._v(" "),n("h2",{attrs:{id:"csharp基础·字符串·常用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#csharp基础·字符串·常用方法"}},[e._v("#")]),e._v(" CSharp基础·字符串·常用方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('IsNullOrEmpty(): 判断字符串是否为空\n            string s = null;\n            if (string.IsNullOrEmpty(s))\n            {\n                Console.WriteLine("是的");\n            }\n            else\n            {\n                Console.WriteLine("不是");\n            }\n            Console.ReadKey();\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('ToCharArray(): 字符串转换为字符数组\n            string str = "abcdefg";\n            char[] chs = str.ToCharArray();\n            foreach(char item in chs)\n            {\n                Console.WriteLine(item);\n            }\n            Console.ReadKey();\n\n            //char转换为字符串\n            str = new string(chs);\n            Console.ReadKey();\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('ToUpper()&ToLower()：转换字符串大小写\n            string str = "abCdefG";\n            Console.WriteLine(str.ToUpper());\n            Console.WriteLine(str.ToLower());\n            Console.ReadKey();\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Equals：字符串比较\n            string s1 = "abc";\n            string s2 = "Abc";\n            //忽略大小写\n            if(s1.Equals(s2))\n            {\n                Console.WriteLine("相等");\n            }\n            else\n            {\n                Console.WriteLine("不相等");\n            }\n            Console.ReadKey();\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('indexof()：查找字符串出现的位置\n            string str = "老毕吃了一顿饭，结果老毕活了";\n            int index = str.IndexOf("老");\n            Console.WriteLine(index);\n            Console.ReadKey();\n')])])])])}),[],!1,null,null,null);s.default=t.exports}}]);