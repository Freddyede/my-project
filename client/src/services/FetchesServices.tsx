import AbstractServices from "./AbstractServices.tsx";

export class FetchesServices extends AbstractServices {

  constructor(uri: string = '') {
    super(uri);
  }
  async getDatas(uri: string) {
    const response: any = fetch(this.uri + uri);
    return await response.json();
  }
  async postDatas(datas: any) {
    const response = await fetch(this.uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datas),
    });
    return response.json();
  }
}