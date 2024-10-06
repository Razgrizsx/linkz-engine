export interface Template {
  title: string;
  items: Item[];
  linkStyle: LinkStyle;
  headerStyle: HeaderStyle;
  titleStyle: TitleStyle;
  template_id: string;
  owner_id: string;
  name: string;
  background: string;
  photo: string;
}

export interface HeaderStyle {
  fontSize: string;
  fontColor: string;
  fontWeight: string;
  fontFamily: string;
}

export interface TitleStyle {
  fontSize: string;
  fontColor: string;
  fontWeight: string;
}

export interface Item {
  name: string;
  url: null | string;
  enabled: boolean;
  type: string;
  image: null;
}

export interface LinkStyle {
  background: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  hoverAnimation: string;
  fontSize: string;
  fontColor: string;
  fontWeight: string;
}

export interface Title {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontColor: string;
  fontWeight: string;
}
