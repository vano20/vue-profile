import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Base',
})
export default class Base extends Vue {
  url = ''
  openNewtab(): void {
    window.open(`https://${this.url}`, '_blank')
  }
}
