import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawt8io: string = ' '
  raw397g: string = ' '
  rawj36f: string = ' '
  rawdc7w: string = ' '
  raw0ftm: string = ' '
  rawlqku: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Remarkable (Template 6)')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Remarkable (Template 6)',
      },
    ])
  }
}
