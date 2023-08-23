import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  text5: string = 'Contact'
  @Input()
  text9: string = 'Facebook'
  @Input()
  text1: string = 'office@remarkable.template'
  @Input()
  copyright: string = '©2022 Product Calgary. All Rights Reserved.'
  @Input()
  imageAlt: string = 'image'
  @Input()
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
  @Input()
  imageSrc: string = '/assets/group%201639.svg'
  @Input()
  text3: string = 'Membership'
  @Input()
  text8: string = 'Twitter'
  @Input()
  text4: string = 'Blog'
  @Input()
  text6: string = 'Linkedin'
  @Input()
  text2: string = '+0 222.345.987'
  @Input()
  imageAlt1: string = 'image'
  @Input()
  imageSrc1: string = '/assets/group%201640.svg'
  @Input()
  text7: string = 'Instagram'
  constructor() {}
}
