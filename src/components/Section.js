export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    })
  }

  // renderItems() {
  //   this._items.forEach((item) => {
  //     this._renderer(item);
  //   })
  // }

  addItem(item) {
    const card = this._renderer(item)
    this._container.append(card);
  }

  // addItem(element) {
  //   this._container.append(element);
  // }
  
  prependItem(item) {
    this._container.prepend(item);
  }

  // prependItem(element){
  //   this._container.prepend(element);
  // }
}