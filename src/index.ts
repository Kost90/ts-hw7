interface IUnionvalue {
  [key: string]: string | number;
}

interface IFunc {
  [key: string]: (arg: any) => string;
}

// не совсем понял, что тут имеется в виду
interface IObjarr {
  [key: number]: string;
}

interface IFourth {
  [key: string | number]: string | number | ((arg: any) => string | number);
  name: string;
}

interface Imore extends IUnionvalue {
  name: string;
  age: number;
}

function CheckValue(obj: IUnionvalue): boolean {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value !== "number") {
      return false;
    }
    return true;
  }
}
