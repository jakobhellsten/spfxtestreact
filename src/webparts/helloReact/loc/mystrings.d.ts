declare interface IHelloReactStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloReactStrings' {
  const strings: IHelloReactStrings;
  export = strings;
}
