import { Cloth } from "./Cloth";

interface MagazineInfo {
  type: string;
  capacity: number;
  clothes: Cloth[];
  addCloth: (cloth: Cloth) => void;
  removeCloth: (color: string) => boolean;
  getSmallestCloth: () => Cloth;
  getCloth: (color: string) => Cloth;
  getClothCount: () => number;
  report: () => string;
}

export class Magazine implements MagazineInfo {
  type: string;
  capacity: number = 0;
  clothes: Cloth[] = [];

  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
  }

  getClothCount(): number {
    return this.clothes.length;
  }

  getSortedClothes(): Cloth[] {
    return this.clothes.sort((a, b) => a.size - b.size);
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) this.clothes.push(cloth);
  }

  removeCloth(color: string): boolean {
    const idx = this.clothes.findIndex((cloth) => cloth.color === color);
    if (idx !== -1) {
      this.clothes.splice(idx, 1);
      return true;
    }
    return false;
  }

  getSmallestCloth(): Cloth {
    if (this.clothes.length === 0) return {} as Cloth;
    const cloth = this.getSortedClothes()[0];
    return cloth;
  }

  getCloth(color: string): Cloth {
    const cloth = this.clothes.find((cloth) => cloth.color === color);
    return cloth;
  }

  report(): string {
    const magazineType = `${this.type} magazine contains:\n`;
    const clothes = this.getSortedClothes();
    const clothesInfo = clothes.map((cloth) => `${cloth.toString()}`).join("\n");
    return magazineType + clothesInfo;
  }
}
