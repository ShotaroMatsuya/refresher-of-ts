import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  // 継承先で実装
  abstract template(): string;

  // [optional]継承先で実装
  regionsMap(): { [key: string]: string } {
    return {};
  }
  // [optional]継承先で実装
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    // modelのイベントリスナーを登録
    this.model.on('change', () => {
      this.render();
    });
  }
  // イベントリスナーを登録
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  // regionMapオブジェクトを吸い上げてnested Elementをmapping
  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }
  // [optional]継承先で実装(nested componentのrenderingを担う)
  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
