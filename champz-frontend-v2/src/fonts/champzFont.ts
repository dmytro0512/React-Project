export class ChampzFont {
  public fontFace: FontFace;

  constructor(
    public url: string,
    public fontFamily: string,
  ) {
    this.fontFace = new FontFace(this.fontFamily, `url(${this.url})`, {
      weight: "100 1000",
    });
  }
}
