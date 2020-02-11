(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(e,n,a){"use strict";a.r(n);var s=a(0),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"csharp基础·里氏转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csharp基础·里氏转换"}},[e._v("#")]),e._v(" CSharp基础·里氏转换")]),e._v(" "),a("h2",{attrs:{id:"csharp基础·里氏转换·概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csharp基础·里氏转换·概念"}},[e._v("#")]),e._v(" CSharp基础·里氏转换·概念")]),e._v(" "),a("p",[e._v("在C#中与继承相理解：建立一个抽象的父类，而父类中没有具体的方法体，所以要通过具体的子类替换掉父类来实现功能。")]),e._v(" "),a("p",[e._v("延伸理解：儿子终有一天要变成父亲来继承父业。在这里儿子指子类，父亲指父类，继承父业就指代实现功能。")]),e._v(" "),a("p",[e._v("作用：我们可以将所有的子类都当作是父类来看，针对父类进行编程，写出通用的代码，使用需求的不断改变。")]),e._v(" "),a("p",[e._v("注：该例子中，使用Teacher、Student为子类，它们分别有SayHi()与SayHello()方法；而Person为父类，有Say()方法。")]),e._v(" "),a("p",[e._v("1.不可替换的情况")]),e._v(" "),a("p",[e._v("1.1 父类对象不可隐式替换掉子类")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Person p2 = new Person();\nTeacher t2 = new Teacher();\nt2 = p2;\n")])])]),a("p",[e._v("简单来讲就是Teacher t2 = new Person();系统会报错")]),e._v(" "),a("p",[e._v("1.2 父类对象不能强制替换子类")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Person p3 = new Person();\nTeacher t3 = new Teacher();\nt3 = (Teacher)p3;\n")])])]),a("p",[e._v("强制转化后，编译过程不报错了，但在运行时依旧会报错。看来父类强行替换子类这条道路是行不通的。")]),e._v(" "),a("p",[e._v("1.3 子类不可替换另一子类：new的是子类却要替换另一个子类")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Person p5 = new Teacher();\nStudent s5 = (Student)p5;\n")])])]),a("p",[e._v("代码中，Teacher类替换了Person类，但却又要替换另一个Student类。")]),e._v(" "),a("p",[e._v("2.可以替换的情况")]),e._v(" "),a("p",[e._v("2.1 子类可以直接隐式替换父类")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Person p1 = new Teacher();\np1.Say();\n")])])]),a("p",[e._v("代码讲解：实例化一个父类变量，但new子类，即转化成了子类（被子类替换），而之后这个变成子类的p1也可以顺利地使用父类的方法Say()。但原属于Teacher类的SayHi方法就不能使用了，因为它现在已经变成父类了。")]),e._v(" "),a("h2",{attrs:{id:"csharp基础·里氏转换·原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csharp基础·里氏转换·原则"}},[e._v("#")]),e._v(" CSharp基础·里氏转换·原则")]),e._v(" "),a("p",[e._v("（1）子类可以赋值给父类，但父类不会有子类的字段、属性、方法（如果有一个地方需要一个父类作为参数，我们可以用一个子类代替）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('         string str =string.Join("|",new string[] { "1", "2","3", "4" });\n')])])]),a("p",[e._v("Join第二参数为Object类，它是父类，此时我们可以用string子类来代替父类")]),e._v(" "),a("p",[e._v("（2）如果父类中装的是子类对象，那么可以将这个父类强转为子类对象。")]),e._v(" "),a("p",[e._v("注：如果一个子类继承了一个父类，那么这个子类除了可以使用自己的成员外，还可以使用从父类那里继承过来的成员。但是父类永远都只能使用自己的成员，而不能使用子类的成员。")]),e._v(" "),a("p",[e._v("【is和as】")]),e._v(" "),a("p",[e._v("is：表示类型转换，只是进行判断，但是并没有进行转换，如果能够转换成功，则返回一个true，否则返回一个false")]),e._v(" "),a("p",[e._v("as：表示类型转换，直接转换，如果能够转换则返回对应的对象，否则返回一个null")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('举例is：\n\n          Person p = new Student();\n          if (p is Student)\n           {\n                   Console.WriteLine("可以转成Student类");\n           }\n           else\n           {\n                    Console.WriteLine("不可以转成Student类");\n           }\n举例as：\n        Person p = new Student();\n        Student t = p as Student;\n')])])]),a("p",[e._v("里氏转换实例代码演示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace _里氏转换\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            //员工九点打卡  经理11点打卡 程序猿不打卡\n\n            Employee emp = new Employee();\n            // emp.DaKa();\n            Manager m = new Manager();\n            //m.DaKa();\n            Programmer p = new Programmer();\n            //p.DaKa();\n\n            Employee e = m;\n\n            Employee[] emps = { emp, m, p };\n            for (int i = 0; i < emps.Length; i++)\n            {\n                if (emps[i] is Manager)\n                {\n                    ((Manager)emps[i]).DaKa();\n                }\n                else if (emps[i] is Programmer)\n                {\n                    ((Programmer)emps[i]).DaKa();\n                }\n                else\n                {\n                    emps[i].DaKa();\n                }\n                emps[i].DaKa();\n            }\n\n            Console.ReadKey();\n        }\n    }\n\n    class Employee\n    {\n        public virtual void DaKa()\n        {\n            Console.WriteLine("员工九点打卡");\n        }\n    }\n\n    class Manager : Employee\n    {\n        public override void DaKa()\n        {\n            Console.WriteLine("经理11点打卡");\n        }\n    }\n\n    class Programmer : Employee\n    {\n        public override void DaKa()\n        {\n            Console.WriteLine("程序猿不打卡");\n        }\n    }\n}\n\n')])])]),a("hr"),e._v(" "),a("p",[e._v("参考文献：")]),e._v(" "),a("p",[e._v("·https://blog.csdn.net/Marshallren/article/details/87521733")]),e._v(" "),a("p",[e._v("·https://blog.csdn.net/songyi160/article/details/50706308")])])}),[],!1,null,null,null);n.default=t.exports}}]);