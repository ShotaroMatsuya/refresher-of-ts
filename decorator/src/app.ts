// function Logger(constructor: Function) {
//   console.log('Logging....');
//   console.log(constructor);
// }
// クラスにデコレータを設定する場合は、constructorを受け取る必要がある
function Logger(logString: string) {
  console.log('LOGGER FACTORY'); // decorator factories
  return function (constructor: Function) {
    // class decorator
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY'); // decorator factories
  // インスタンス後に実行されるためgenericを用いる
  // newは受け取ったdata(クラス)がインスタンス化できることを保証している
  return function <T extends { new (...args: any[]): { name: string } }>( // class decorator
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      // 元のclassを継承しながら上書きする
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// 実行順
// decorator factory1 →  decorator factory2 → decorator 2 →decorator1
@Logger('LOGGING - PERSON') // class decorator
@WithTemplate('<h1>My Person Object</h1>', 'app') // class decorator
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object....');
  }
}

const pers = new Person();

console.log(pers);

//

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

// 対象のメソッドが呼ばれたとき常にそのメソッドが所属しているobjが参照されるようにする
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // valueから元のメソッドを取り出す
  const originalMethod = descriptor.value;

  // 書き換え後のディスクリプタを定義
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // 利用者がプロパティにアクセスする前に、何らかの処理を実行する
      // ここでのプロパティはshowMessageである
      // thisは,getメソッドを実行するobjを参照する
      // このような実装をすることで常にButtonクラスが参照される
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

//

interface ValidatorConfig {
  // index型を定義
  // propertiesにはクラス名を指定
  // 値はオブジェクト
  [properties: string]: {
    // index型で定義
    // 型はstringで、string型の配列を格納
    [validatableProp: string]: string[]; // ['required','positive']
  };
}

// バリデーションが実行されたら、値が登録される
const registeredValidators: ValidatorConfig = {};

// 必須チェックのデコレータ
// ValidatorConfigのindex型通りに定義
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    // クラスのバリデータの設定を上書きしないようにコピー
    ...registeredValidators[target.constructor.name],
    // propNameはプロパティ名が入る
    [propName]: [
      // バリデータの値も複数入る
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  };
}

// 数値チェックのデコレータ
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    // クラスのバリデータの設定を上書きしないようにコピー
    ...registeredValidators[target.constructor.name],
    [propName]: [
      // バリデータの値も複数入る
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  };
}

// バリデーションチェック関数
function validate(obj: any) {
  // 最初に引数として受け取ったobjがどのクラスのものなのか知る必要がある
  // checkしたバリデーション情報を取得することが目的
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    // 検証するものがない場合は、trueを返す
    return true;
  }
  let isValid = true;
  // バリデーションとして登録されている情報をループで取り出す
  // 最初はパラメータ
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          // requiredでは、引数のobjのパラメータが空でないばいはtrueを返す
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});
