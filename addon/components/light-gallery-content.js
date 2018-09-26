import Component from '@ember/component';
import layout from '../templates/components/light-gallery-content';
import { merge } from '@ember/polyfills';
import $ from 'jquery';

export default Component.extend({
  layout,
  _galleryInstance: undefined,
  options: {},
  collection: undefined,

  didInsertElement() {
    this._super(...arguments);
    this._initGalleryPlugin();
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this._initGalleryPlugin();
  },

  _initGalleryPlugin() {
    let mergedOptions = merge(this.get('options'), this.get('attrs'));
    let gallery = $(`#${this.elementId}`).lightGallery(mergedOptions);

    this.set('_galleryInstance', gallery);
  },

  willDestroyElement() {
    this._super(...arguments);
    $(`#${this.elementId}`).data('lightGallery').destroy(true);
  }
});
