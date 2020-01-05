export class Blog {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  createdDate?: Date;
  description: string;
  thumbnailImageUrl?: string;
  bannerImageUrl?: string;
  createdby: number;
}

export class Category {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  about: string;
  thumbnailImageUrl: string;
  bannerImageUrl: string;
}

export class BlogCategory {
  id: number;
  categId: number;
  blogId: number;
}
