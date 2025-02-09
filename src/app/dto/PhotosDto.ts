import {Photo} from "./Photo";

export class PhotosDto implements Photo{
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;

  constructor(albumId:number, id:number, title: string, thumbnailUrl:string, url:string ) {
    this.id=id;
    this.albumId=albumId;
    this.thumbnailUrl=thumbnailUrl;
    this.title=title;
    this.url=url;
  }
}
