export class CSSUnitValuePonyfill implements CSSUnitValue {
  value: number;
  unit: string;

  constructor(value: number, unit: string) {
    this.value = value;
    this.unit = unit;
  }

  add(...values: CSSNumberish[]): CSSNumericValue {
    console.log({ values });
    throw new Error("Method not implemented.");
  }

  div(...values: CSSNumberish[]): CSSNumericValue {
    console.log({ values });
    throw new Error("Method not implemented.");
  }

  equals(...value: CSSNumberish[]): boolean {
    console.log({ value });
    throw new Error("Method not implemented.");
  }

  max(...values: CSSNumberish[]): CSSNumericValue {
    console.log({ values });
    throw new Error("Method not implemented.");
  }

  min(...values: CSSNumberish[]): CSSNumericValue {
    console.log({ values });
    throw new Error("Method not implemented.");
  }

  mul(...values: CSSNumberish[]): CSSNumericValue {
    console.log({ values });
    throw new Error("Method not implemented.");
  }

  sub(...values: CSSNumberish[]): CSSNumericValue {
    console.log({ values });
    throw new Error("Method not implemented.");
  }

  to(unit: string): CSSUnitValue {
    console.log({ unit });
    throw new Error("Method not implemented.");
  }

  toSum(...units: string[]): CSSMathSum {
    console.log({ units });
    throw new Error("Method not implemented.");
  }

  toString() {
    return `${this.value.toString()}${this.unit}`;
  }

  type(): CSSNumericType {
    throw new Error("Method not implemented.");
  }
}
