
export type A = {
  id: string;
}

export type B = {
  id: number;
}

export type IdType = A | B;

export class MetadataAccessor<T, D extends IdType = IdType> {
  private constructor(public readonly key: string) {}

  toString() {
    return this.key;
  }

 
  static create<T, D extends IdType = IdType>(key: string) {
    return new MetadataAccessor<T, D>(key);
  }
}