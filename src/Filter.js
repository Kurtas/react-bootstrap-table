import Const from './Const';
import { EventEmitter } from 'events';

export class Filter extends EventEmitter {
  constructor(data) {
    super(data);
    this.currentFilter = {};
  }

  handleFilter(dataField, value, type) {
    const filterType = type || Const.FILTER_TYPE.CUSTOM;
    if (typeof value === 'string') value = value.trim();
    if (typeof value.comparator === 'string' && value.comparator === '') value = undefined;
    this.currentFilter[dataField] = { column: dataField, value: value, type: filterType };
    this.emit('onFilterChange', this.currentFilter);
  }

}
