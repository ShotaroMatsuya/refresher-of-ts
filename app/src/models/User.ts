interface UserProps {
  name?: string;
  age?: number;
  // [key: string]: any; // that's cheating
}

export class User {
  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
