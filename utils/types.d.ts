declare type Join<
  K,
  P,
  Separator = '.',
  CamelCase extends 'true' | 'false' = 'false',
  ProperCase extends 'true' | 'false' = 'false',
> = K extends string | number
  ? P extends string | number
    ? `${ProperCase extends 'true' ? Capitalize<K> : K}${'' extends P
        ? ''
        : Separator}${P extends string
        ? ProperCase extends 'true'
          ? Capitalize<P>
          : CamelCase extends 'true'
          ? Capitalize<P>
          : P
        : P}`
    : never
  : never

declare type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...Array<0>,
]

declare type Paths<
  T,
  D extends number = 10,
  Separator = '.',
  CamelCase extends 'true' | 'false' = 'false',
  ProperCase extends 'true' | 'false' = 'false',
> = [D] extends [never]
  ? ''
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ?
            | `${K}`
            | Join<K, Paths<T[K], Prev[D]>, Separator, CamelCase, ProperCase>
        : never
    }[keyof T]
  : ''

declare type Leaves<
  T,
  D extends number = 10,
  Separator = '.',
  CamelCase extends 'true' | 'false' = 'false',
  ProperCase extends 'true' | 'false' = 'false',
> = [D] extends [never]
  ? ''
  : T extends object
  ? {
      [K in keyof T]-?: Join<
        K,
        Leaves<T[K], Prev[D]>,
        Separator,
        CamelCase,
        ProperCase
      >
    }[keyof T]
  : ''

declare type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

declare type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

declare type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

declare type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>
