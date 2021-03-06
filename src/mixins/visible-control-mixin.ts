import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class MyMixin extends Vue {
  visible = false;

  get buttonText(): string {
    return this.visible ? 'Close' : 'Open';
  }

  toggleVisible() {
    this.visible = !this.visible;
  }
}
