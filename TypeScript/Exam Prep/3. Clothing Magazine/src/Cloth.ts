interface ClothInfo {
  color: string;
  size: number;
  type: string;
}

export class Cloth implements ClothInfo {
  color: string;
  size: number;
  type: string;
  constructor(color: string, size: number, type: string) {
    this.color = color;
    this.size = size;
    this.type = type;
  }

  toString(): string {
    return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
  }
}
