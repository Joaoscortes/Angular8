export class Product {
  'id': number;
  'pvp': number;
  'iva': number;
  'discount': number;
  constructor(data?: any) {
    Object.assign(this, data);
  }
}
