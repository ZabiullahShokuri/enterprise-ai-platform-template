export interface CollectionItem<T> {
  id: string;
  data: T;
}

export class Collection<T> {
  private readonly items = new Map<string, T>();

  register(id: string, data: T): void {
    this.items.set(id, data);
  }

  unregister(id: string): void {
    this.items.delete(id);
  }

  get(id: string): T | undefined {
    return this.items.get(id);
  }

  getAll(): CollectionItem<T>[] {
    return [...this.items.entries()].map(([id, data]) => ({
      id,
      data,
    }));
  }

  has(id: string): boolean {
    return this.items.has(id);
  }

  clear(): void {
    this.items.clear();
  }

  get size(): number {
    return this.items.size;
  }
}

export function createCollection<T>() {
  return new Collection<T>();
}
