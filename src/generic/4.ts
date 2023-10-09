/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentPage {
  title: string;
}
class Component<T extends ComponentPage> {
  constructor (public props:T) {

  }
}

class Page extends Component<ComponentPage> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};