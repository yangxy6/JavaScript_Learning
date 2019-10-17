function Foo() {
  getName = function() {
    console.log(1);
  };
  // return this;
}
Foo.getName = function() {
  console.log(2);
};
Foo.prototype.getName = function() {
  console.log(3);
};
var getName = function() {
  console.log(4);
};
function getName() {
  console.log(5);
}

Foo.getName(); //2 访问Foo上静态变量
getName(); //4 // 变量声明提升、函数声明提升、函数声明高于变量声明提升在上面，下面变量提升覆盖函数声明
Foo().getName(); // 1 Foo中getName 没有var之类声明  getName要赋值，里面没有找到找到了外面的函数getName ，所以外面的getName被赋值了 ，打印1
getName(); //1 3中全局的window.getName被重新赋值 ，打印新的1
new Foo.getName(); //2 相当于 new (Foo.getName)
new Foo().getName(); //3 相当于 (new Foo()).getName
new new Foo().getName(); //3 相当于 new ((new Foo()).getName)() 构造原型上的getName

// 优先级
// () > . >new
